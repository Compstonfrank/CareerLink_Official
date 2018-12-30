/* eslint-disable camelcase */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LocalLogin from './Local_Login'

const Login = props => {
  return (
    <Fragment>
      <h1> USER IS ATTEMPTING TO LOG IN </h1>
      <br />
        <LocalLogin />
        <button type="button" id="facebook">
          {' '}
          Login with Facebook{' '}
        </button>
        <button type="button" id="github">
          {' '}
          Login with GitHub{' '}
        </button>
        <button type="button" id="google">
          {' '}
          Login with Google{' '}
        </button>
      <br />
      <div>
        <Link to="/sign_up">
          <button type="button" id="newUser">
            {' '}
            Create New Account{' '}
          </button>
        </Link>l
      </div>
  </Fragment>
  );
};

export default Login;
