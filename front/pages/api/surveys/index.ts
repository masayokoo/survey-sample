import { NextApiRequest, NextApiResponse } from 'next'
import { sampleSurveys } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Handle any other HTTP method
    if (!Array.isArray(sampleSurveys)) {
      throw new Error('Cannot find survey data')
    }

    res.status(200).json(sampleSurveys)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
