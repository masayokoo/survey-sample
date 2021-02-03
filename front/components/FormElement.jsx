import React from 'react';
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext,
  useField
} from 'formik';

export function Form(props) {
  return (
    <Formik
      {...props}
    >
      <FormikForm className="needs-validation" noValidate="">
        {props.children}
      </FormikForm>
    </Formik>
  )
}

export function TextField(props) {
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

export function TextAreaField(props) {
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

export function SelectField(props) {
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
        <option value="" >Choose...</option>
        {options.map((optn, index) => <option key={index} value={optn.value} label={optn.label || optn.value} />)}
      </Field>
      <ErrorMessage name={field} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export function RadioField(props) {
  const { field, label, options, formik } = props
  return (
    <>
      <div id="my-radio-group">Picked</div>
      <div role="group" aria-labelledby="my-radio-group">
        {
          options.map((optn, index) => {
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

export function CheckField(props) {
  const { field, label, options, formik } = props
  return (
    <>
      <div id="my-radio-group">Picked</div>
      <div role="group" aria-labelledby="my-radio-group">
        {
          options.map((optn, index) => {
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

export function SubmitButton(props){
  const { title, ...rest } = props;
  const { isSubmitting } = false;

  return (
    <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
  )
}
