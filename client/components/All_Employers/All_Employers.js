/* eslint-disable camelcase */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class All_Employers extends Component {
  componentDidMount() {
    this.props.fetchEmployers();
  }

  render() {
    const { employers } = this.props;
    return (
      <div>
        <h1>ALL EMPLOYERS COMPONENT</h1>
        {employers.map(employer => {
          return (
            <div key={employer.id}>
              <Link to={`/employers/${employer.id}`}>
                <div>
                  <img src={employer.logoUrl} id="allemployerPics" />
                  <h3>{employer.name}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
