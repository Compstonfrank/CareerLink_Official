/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to={`/students/${student.id}`}>
                <div>
                  <img src={student.photoUrl} id="allStudentPics" />
                  <h3>
                    {student.firstName} {student.lastName}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
