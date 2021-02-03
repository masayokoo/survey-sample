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
  const { name, label, placeholder, formik, ...rest } = props
  return (
    <>
      {label && <label for={name}>{label}</label>}
      <Field
        className="form-control"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ""}
        onChange={formik.handleChange}
        {...rest}
      />
      <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export function SelectField(props) {
  const { name, label, options, formik } = props
  return (
    <>
      {label && <label for={name}>{label}</label>}
      <Field
        as="select"
        id={name}
        name={name}
        onChange={formik.handleChange}
      >
        <option value="" >Choose...</option>
        {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
      </Field>
      <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
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
