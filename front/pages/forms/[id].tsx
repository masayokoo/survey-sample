import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Router from 'next/router';

import { useFormik } from 'formik';
import { Survey, Question } from '../../interfaces'
// import { sampleSurveys } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import { Form, TextField, SelectField, CheckField, RadioField, TextAreaField, SubmitButton } from '../../components/FormElement'

type Props = {
  survey?: Survey
}

const StaticPropsDetail = ({ survey }: Props) => {
  const [formData] = useState({});

  const getFormElement = (question: Question, formik: any) => {
    const props = {
      field: question.field,
      label: question.label,
      placeholder: question.placeholder,
      options: question.options,
      formik: formik,
    };

    if (question.type === "text_field" || question.type === "email") {
      return <TextField {...props} />
    }

    if (question.type === "text_area") {
      return <TextAreaField {...props} />
    }

    if (question.type === "select_box") {
      return <SelectField  {...props} />
    }

    if (question.type === "check_box") {
      return <CheckField  {...props} />
    }

    if (question.type === "radio_button") {
      return <RadioField  {...props} />
    }
  }

  console.log()

  const formik = useFormik({
    initialValues: {
    },
    onSubmit: async values => {
      const payload = {
        survey_answer: {
          value: values
        }
      }
      try {
        const res = await fetch(`http://localhost:8888/surveys/${Router.query.id}/survey_answers`, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(payload),
          headers: {'Content-Type': 'application/json'},
        });

        const json = await res.json();
        if (json.success) {
          // Router.push('/success');
          alert("success")
        } else {
          alert("error")
        }
      } catch (e) {
        console.log('An error occurred', e);
        alert("error");
      }
    },
  });

  return (
    <Layout
      title='hoge'
    >
      <Form
        initialValues={formData}
        onSubmit={formik.handleSubmit}
        >
        {survey?.questions.map( (question) => {
          const displayConditions = question.displayConditions;
          const isDisp = displayConditions ? displayConditions?.some((condition) => {
            const field = condition?.field
            const targetValue = formik.values && Object(formik.values)[field]
            return condition && condition.values?.indexOf(targetValue) !== -1
          }) : true
          if (!isDisp) return null;
          return (
            <div key={question.id}>
              {getFormElement(question, formik)}
            </div>
          )
        }
        )}
        <SubmitButton
          title="Submit"
        />
      </Form>
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const res = await fetch('http://localhost:8888/surveys')
  const json = await res.json()
  const surveys: Survey[] = json
  const paths = surveys.map((survey) => ({
    params: { id: survey.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const res = await fetch(`http://localhost:8888/surveys/${id}`)
    const json = await res.json()
    const survey: Survey = json
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { survey } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
