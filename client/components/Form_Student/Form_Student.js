/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Yup validations
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    phoneNumber: Yup.string(),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
      photoUrl: Yup.string(),
      LinkedInUrl: Yup.string(),
      githubUrl: Yup.string(),
      youtubeUrl: Yup.string()
  });

export default class Form_Student extends Component {


    handleSubmit = (values, {
        props = this.props,
        setSubmitting
      }) => {

        console.log(values);
        alert('Form Submitted');
        setSubmitting(false);
        return;
    }

    render() {

        return (
          <Formik
            initialValues={{
               firstName: '',
               lastName: '',
               email: '',
               phoneNumber: '',
               password: '',
               photoUrl: '',
               LinkedInUrl: '',
               githubUrl: '',
               youtubeUrl: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={this.handleSubmit}
            render={formProps => {

              return (
                <Form>
                    <h1>Personal Info</h1>
                   <Field
                     type="text"
                     name="firstName"
                     placeholder="First Name"
                   />
                   <ErrorMessage name="firstName" />

                   <Field
                     type="text"
                     name="lastName"
                     placeholder="Last Name"
                   />
                   <ErrorMessage name="lastName" />

                   <Field
                      type="text"
                      name="password"
                      placeholder="Password"
                             />
                    <ErrorMessage name="password" />

                    <Field
                      type="text"
                      name="photoUrl"
                      placeholder="Photo Url"
                             />
                    <ErrorMessage name="photoUrl" />

                    <h1>Contact Info</h1>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email address"
                             />
                    <ErrorMessage name="email" />

                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                             />
                    <ErrorMessage name="phoneNumber" />


                    <h1>Professional Info</h1>
                    <Field
                      type="text"
                      name="LinkedInUrl"
                      placeholder="LinkedIn Url"
                             />
                    <ErrorMessage name="LinkedInUrl" />

                    <Field
                      type="text"
                      name="githubUrl"
                      placeholder="Github Url"
                             />
                    <ErrorMessage name="githubUrl" />

                    <Field
                      type="text"
                      name="youtubeUrl"
                      placeholder="YouTube Url"
                             />
                    <ErrorMessage name="youtubeUrl" />

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
