import React from 'react';
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
} from 'formik';

export const Form = (props: any ) => {
  return (
    <Formik
      {...props}
    >
      <FormikForm className="needs-validation" noValidate={true}>
        {props.children}
      </FormikForm>
    </Formik>
  )
}

export const TextField = (props: { [x: string]: any; field: string; label: string; placeholder?: string; formik: any; }) => {
  const { field, label, placeholder, formik, ...rest } = props
  return (
    <>
      {label && <label htmlFor={field}>{label}</label>}
      <Field
        className="form-control"
        type="text"
        name={field}
        id={field}
        placeholder={placeholder || ""}
        onChange={formik.handleChange}
        {...rest}
      />
      <ErrorMessage name={field} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export const TextAreaField = (props: { [x: string]: any; field: string; label: string; placeholder?: string; formik: any; }) => {
  const { field, label, placeholder, formik, ...rest } = props
  return (
    <>
      {label && <label htmlFor={field}>{label}</label>}
      <Field
        className="form-control"
        component="textarea"
        name={field}
        id={field}
        placeholder={placeholder || ""}
        onChange={formik.handleChange}
        {...rest}
      />
      <ErrorMessage name={field} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export const SelectField = (props: { field: string; label: string; options: any; formik: any; }) => {
  const { field, label, options, formik } = props
  return (
    <>
      {label && <label htmlFor={field}>{label}</label>}
      <Field
        as="select"
        id={field}
        name={field}
        onChange={formik.handleChange}
      >
        <option value="" >選択してください</option>
        {options.map((optn: { value: string | number | readonly string[] | undefined; label: any; }, index: string | number | null | undefined) => <option key={index} value={optn.value} label={optn.label || optn.value} />)}
      </Field>
      <ErrorMessage name={field} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export const RadioField = (props: { field: string; label: string; options: any; formik: any; }) => {
  const { field, label, options, formik } = props
  return (
    <>
      <div id="my-radio-group">{label}</div>
      <div role="group" aria-labelledby="my-radio-group">
        {
          options.map((optn: { value: string; label: string; }, index: number | null | undefined) => {
            return (
              <label key={index} htmlFor={`${field}_${optn.value}`} >
                <Field
                  type="radio"
                  id={`${field}_${optn.value}`}
                  name={field} value={optn.value}
                  onChange={formik.handleChange}
                  checked={formik.values[field] === optn.value}
                />
                {optn.label}
              </label>
            )
          })
        }
      </div>
      <ErrorMessage name={field} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export const CheckField = (props: { field: string; label: string; options: any; formik: any; }) => {
  const { field, label, options, formik } = props
  return (
    <>
      <div id="my-check-group">{label}</div>
      <div role="group" aria-labelledby="my-check-group">
        {
          options.map((optn: { value: string; label: string; }, index: number | null | undefined) => {
            return (
              <label key={index} htmlFor={`${field}_${optn.value}`} >
                <Field
                  type="checkbox"
                  id={`${field}_${optn.value}`}
                  name={field}
                  value={optn.value}
                  onChange={formik.handleChange}
                  checked={formik.values[field] && formik.values[field].indexOf(optn.value) !== -1}
                />
                {optn.label}
              </label>
            )
          })
        }
      </div>
      <ErrorMessage name={field} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export const SubmitButton = (props: { [x: string]: any; title: any; }) => {
  const { title, ...rest } = props;

  return (
    <button type="submit" {...rest} >{title}</button>
  )
}
