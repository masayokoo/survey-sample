import * as React from 'react'
import { Survey, Question } from '../interfaces'

type FormProps = {
  survey: Survey
  handleChange: () => void
}

type FormComponentProps = {
  question: Question
  handleChange: () => void
}

const FormComponent = ({ question, handleChange }: FormComponentProps) => {
  switch (question.type) {
    case 'text_field':
      return (
        <div>
          <label htmlFor="text">hoge</label>
          <input type="text" id="text" name="text" onChange={handleChange} />
        </div>
      )
    case 'text_area':
      return (
        <div>
          <label htmlFor="text_area">hoge</label>
          <textarea id="text_area" name="text_area" onChange={handleChange} />
        </div>
      )
    case 'email':
      return <input type="mail" />
    case 'tel':
      return <input type="tel" />
    case 'radio_button':
      return (
        <div onChange={handleChange}>
          <input type="radio" name="radio_hoge" id="raiod_hoge" value="hoge" defaultChecked={true} onChange={handleChange} />
          <label htmlFor="radio_hoge">hoge</label>
          <input type="radio" name="radio_fuga" id="radio_fuga" value="fuga" defaultChecked={true} onChange={handleChange} />
          <label htmlFor="radio_fuga">fuga</label>
        </div>
      )
    case 'check_box':
      return (
        <div>
          <input id="check_hoge" name="check_hoge" type={ 'checkbox' } value="hoge" defaultChecked={true} onChange={handleChange} />
          <label htmlFor="check_hoge">hoge</label>
          <input id="check_fuga" name="check_fuga" type={ 'checkbox' } value="fuga" defaultChecked={true} onChange={handleChange} />
          <label htmlFor="check_fuga">hoge</label>
        </div>
      )
    case 'select_box':
      return (
        <div>
          <label htmlFor="select_box">hoge</label>
          <select
            name="select_box"
            id="select_box"
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      )
    default:
      return <></>;
  }
}

const Form = ({ survey, handleChange }: FormProps) => (
  <>
    {survey.questions.map((question) => (
      <div>
        <FormComponent question={question} handleChange={handleChange} />
      </div>
    ))}
  </>
)

export default Form
