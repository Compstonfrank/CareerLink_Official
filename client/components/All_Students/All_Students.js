/* eslint-disable camelcase */
import React, { Component } from 'react';

export default class AllStudents extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }
  render() {
    console.log(this.props.students);
    console.log('HELLLLO');
    const { students } = this.props;
    return (
      <div>
        <h1>ALL STUDENT COMPONENT</h1>
        {students.map(student => {
          return (
            <div key={student.id}>
              <img src={student.photoUrl} id="allStudentPics" />
              <h2>
                name: {student.firstName}{' '}{student.lastName}
              </h2>
              <h3>email: {student.email}</h3>
              <h3>linkedIn: {student.LinkedInUrl}</h3>
              <h3>GitHub: {student.gitHubUrl}</h3>
              <h3>YouTube: {student.youtubeUrl}</h3>
              <h3>Phone: {student.phoneNumber}</h3>
              <h4>Description: {student.description}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
