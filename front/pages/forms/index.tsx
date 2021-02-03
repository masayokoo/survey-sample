import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Survey } from '../../interfaces'
import { sampleSurveys } from '../../utils/sample-data'
import Layout from '../../components/Layout'

type Props = {
  surveys: Survey[]
}

const WithStaticProps = ({ surveys }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /surveys</p>
    {surveys.map((survey) => {
      return (
        <li key={survey.id} >
          <Link href={`/forms/${survey.id}`}>
            {`/forms/${survey.id}`}
          </Link>
        </li>
      )
    })}
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const res = await fetch('http://localhost:3000/api/surveys')
  const json = await res.json()
  const surveys: Survey[] = json
  return { props: { surveys } }
}

export default WithStaticProps
