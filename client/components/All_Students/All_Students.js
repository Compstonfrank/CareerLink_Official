/* eslint-disable camelcase */
import React, { Component } from 'react';

export default class AllStudents extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }
  render() {
    const { students } = this.props;
    return (
      <div>
        <h1>ALL STUDENT COMPONENT</h1>
        {students.map(student => {
          return (
            <div key={student.id}>
              <img src={student.photoUrl} id="allStudentPics" />
              <h3>
                name: {student.firstName} {student.lastName}
              </h3>
              <p>email: {student.email}</p>
              <p>linkedIn: {student.LinkedInUrl}</p>
              <p>GitHub: {student.gitHubUrl}</p>
              <p>YouTube: {student.youtubeUrl}</p>
              <p>Phone: {student.phoneNumber}</p>
              <p>Description: {student.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
