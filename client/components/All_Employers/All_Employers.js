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
                  <h3>name: {employer.name}</h3>
                </div>
              </Link>
              <h4>industry: {employer.industry}</h4>
              <p>email: {employer.email}</p>
              <p>linkedIn: {employer.LinkedInUrl}</p>
              <p>GitHub: {employer.gitHubUrl}</p>
              <p>YouTube: {employer.youtubeUrl}</p>
              <p>Phone: {employer.phoneNumber}</p>
              <p>Description: {employer.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
