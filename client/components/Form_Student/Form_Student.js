/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {postStudent} from '../../reducers/student'

// Yup validations
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email Required'),
  });


export default class Form_Student extends Component {


    handleSubmit = async (values, {
      props = this.props,
      setSubmitting,
      setStatus,
      setErrors,
      setFieldError
    }) => {
      try {
          setStatus(undefined)
          let result = await props.dispatch(postStudent(values))
          if (result.user.error.response.status === 401) {
            console.log('I hit a 401 error in the backend')
          }
          setSubmitting(false);
          return;
      } catch (err){
        console.log(err)
      }
  }


    render() {

        return (
          <Formik
            initialValues={{
               firstName: '',
               password: '',
               email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={this.handleSubmit}
            render={formProps => {
              console.log(formProps.errors)
              return (
                <Form>
                    <h1>Formik Yup Form</h1>
                   <Field
                     type="text"
                     name="firstName"
                     placeholder="First Name"
                   />
                   {formProps.errors.name && formProps.errors.name ? (
                          <div>{formProps.errors.name}</div>
                        ) : null}
                   <ErrorMessage name="firstName" />

                   <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                             />
                    <ErrorMessage name="password" />

                    <Field
                      type="text"
                      name="email"
                      placeholder="Email address"
                             />
                    <ErrorMessage name="email" />

                    <button
                      type="submit"
                      disabled={formProps.isSubmitting}>
                        Submit Form
                     </button>
                </Form>
               );
            }}
         />);
    }

}
