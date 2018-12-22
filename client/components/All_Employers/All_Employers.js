/* eslint-disable camelcase */
import React, { Component } from 'react';

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
              <img src={employer.logoUrl} id="allemployerPics" />
              <h3>name: {employer.name}</h3>
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
