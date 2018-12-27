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
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    photoUrl: Yup.string()
      .url('Invalid needs to be a url'),
    description: Yup.string(),
    email: Yup.string()
      .email('Invalid email')
      .required('Email Required'),
    phoneNumber: Yup.string(),
    LinkedInUrl: Yup.string()
      .url('Invalid needs to be a url'),
    githubUrl: Yup.string()
      .url('Invalid needs to be a url'),
    youtubeUrl: Yup.string()
      .url('Invalid needs to be a url')
  });


export default class Form_Student extends Component {


    handleSubmit = async (values, {
      props = this.props,
      setSubmitting,
      setStatus
    }) => {
      try {
          setStatus(undefined)
          await props.dispatch(postStudent(values))
          setSubmitting(false);
          // props.history.push('/students')
          return;
      } catch (err){
        // sets API errors using setStatus this is test still
        setStatus({email: 'Email Already exists'})
        // resets Submit button so you can use again after fixing status error
        setSubmitting(false);
      }
  }


    render() {

        return (
          <Formik
            initialValues={{
               firstName: '',
               lastName: '',
               password: '',
               photoUrl: 'https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg',
               description: '',
               email: '',
               phoneNumber: '',
               LinkedInUrl: '',
               githubUrl: '',
               youtubeUrl: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={this.handleSubmit}
            render={formProps => {
              console.log(formProps)
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
                      type="password"
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

                    <Field
                      type="text"
                      name="description"
                      placeholder="description"
                             />
                    <ErrorMessage name="description" />

                    <h1>Contact Info</h1>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email address"
                             />

                    {formProps.status && formProps.status.email ? (
                      <div>API Error: {formProps.status.email}</div>
                    ) : <ErrorMessage name="email" />}


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
