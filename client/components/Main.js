/* eslint-disable camelcase */
import React from 'react';
import { Route, NavLink, withRouter, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Form_Student_Container from './Form_Student/Form_Student_Container';

const Main = () => {
  return (
    <div>

      <div>
        <Switch>
          <Route exact path="/form" component={Form_Student_Container} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
