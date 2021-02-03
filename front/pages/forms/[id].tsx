import { useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Router from 'next/router';

import { useFormik } from 'formik';
import { Survey, Question } from '../../interfaces'
import { sampleSurveys } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import { Form, TextField, SelectField, SubmitButton } from '../../components/FormElement'

type Props = {
  survey?: Survey
}

const StaticPropsDetail = ({ survey }: Props) => {
  const [formData, setFormData] = useState({});

  const getFormElement = (question: Question, formik: any) => {
    const props = {
        name: question.label,
        label: question.label,
        options: question.options,
        formik: formik,
    };

    if (question.type === "text_field" || question.type === "email") {
      return <TextField {...props} />
    }

    if (question.type === "select_box") {
      return <SelectField  {...props} />
    }
  }

  const formik = useFormik({
    initialValues: {
    },
    onSubmit: async values => {
      try {
        const res = await fetch('https://example.com/submit', {
          method: 'POST',
          body: JSON.stringify(values, null, 2),
          headers: {'Content-Type': 'application/json'},
        });

        const json = await res.json();
        if (json.success) {
          Router.push('/success');
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
        enableReinitialize
        initialValues={formData}
        onSubmit={formik.handleSubmit}
        >
        {survey?.questions.map( (question) => (
          <div key={question.id}>
            {getFormElement(question, formik)}
          </div>
        ))}
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
  const paths = sampleSurveys.map((survey) => ({
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
    const survey = sampleSurveys.find((survey) => survey.id === id)
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { survey } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
