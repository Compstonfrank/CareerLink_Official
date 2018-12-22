/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = props => {
  return (
    <div>
      <h1> USER IS ATTEMPTING TO LOG IN </h1>
      <br />
      <form>
        <label> Email: </label>
        <input type="text" name="email" placeholder="Email" />

        <label> Password: </label>
        <input type="text" name="password" placeholder="Password" />

        <div>
          <button type="submit"> Login </button>{' '}
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
        </div>
      </form>
      <br />

      <div>
        <Link to="/sign_up">
          <button type="button" id="newUser">
            {' '}
            Create New Account{' '}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
