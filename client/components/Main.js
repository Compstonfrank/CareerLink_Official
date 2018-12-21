import React from 'react';
import { Route, NavLink, withRouter, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from 'Welcome';
import All_Employers from './components/All_Employers/All_Employers';
import All_Students from './components/All_Students/All_Students';
import Single_Employer from './components/Single_Employer/Single_Employer';
import Single_Student from './components/Single_Student/Single_Student';
import Form_Employer from './components/Form_Employer/Form_Employer';
import Form_Student from './components/Form_Student/Form_Student';

const Main = () => {
  return (
    <div>
      <nav id="navbar">
        <Link
          style={{ textDecoration: 'none', color: '#c0c0c0' }}
          to="/employers"
        >
          Employers
        </Link>
        <Link
          style={{ textDecoration: 'none', color: '#c0c0c0' }}
          to="/students"
        >
          Students
        </Link>
        <Link style={{ textDecoration: 'none', color: '#c0c0c0' }} to="/">
          Home
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
      <Switch>
        <Route exact path="/students" component={All_Students} />
      </Switch>
      <Switch>
        <Route exact path="/students/:studentId" component={Single_Student} />
      </Switch>
      <Switch>
        <Route exact path="/students/new_student" component={Form_Student} />
      </Switch>
      <Switch>
        <Route exact path="/employers" component={All_Employers} />
      </Switch>
      <Switch>
        <Route
          exact
          path="/employers/:employerId"
          component={Single_Employer}
        />
      </Switch>
      <Switch>
        <Route exact path="/employers/new_employer" component={Form_Employer} />
      </Switch>
    </div>
  );
};

export default Main;
