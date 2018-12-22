/* eslint-disable camelcase */
import React from 'react';
import { Route, NavLink, withRouter, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import Login from './Login/Login';
import Sign_Up from './Sign_Up/Sign_Up';
import User_Info from './User_Info/User_Info';
import About_Us from './About_Us';
import All_Employers from './All_Employers/All_Employers';
import All_Students from './All_Students/All_Students';
import Single_Employer from './Single_Employer/Single_Employer';
import Single_Student from './Single_Student/Single_Student';
import Form_Employer from './Form_Employer/Form_Employer';
import Form_Student from './Form_Student/Form_Student';

const Main = () => {
  return (
    <div>
      <nav id="navbar">
        <Link to="/employers"> Employers </Link>
        <Link to="/students"> Students </Link>
        <Link to="/info"> My Info </Link>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/about"> About Us </Link>
      </nav>

      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign_up" component={Sign_Up} />
          <Route exact path="/info" component={User_Info} />
          <Route exact path="/about_us" component={About_Us} />
          <Route exact path="/students" component={All_Students} />
          <Route exact path="/students/:studentId" component={Single_Student} />
          <Route exact path="/students/new_student" component={Form_Student} />
          <Route exact path="/employers" component={All_Employers} />
          <Route
            exact
            path="/employers/:employerId"
            component={Single_Employer}
          />
          <Route
            exact
            path="/employers/new_employer"
            component={Form_Employer}
          />
        </Switch>
      </div>

      <footer id="footer">
        <Link to="/about"> About Us </Link>
        <Link to="/students/1"> Colleen Risso </Link>
        <Link to="/students/2"> Frank Compston </Link>
        <Link to="/students/3"> Justin Cook </Link>
        <Link to="/students/4"> Robin Lee </Link>
      </footer>
    </div>
  );
};

export default Main;
