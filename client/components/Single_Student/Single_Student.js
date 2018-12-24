/* eslint-disable camelcase */
import React, { Component } from 'react';

export default class Single_Student extends Component {
    
    componentDidMount(){
        this.props.fetchSingleStudent()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.studentId !== this.props.match.params.studentId) {
          this.props.fetchSingleStudent();
        }
    }


    render() {
        const { student } = this.props;
        return (
            <div key={student.id}>
              <img src={student.photoUrl} id="allStudentPics" />
              <h2>
                name: {student.firstName}{' '}{student.lastName}
              </h2>
              <h3>email: {student.email}</h3>
              <h3>linkedIn: {student.LinkedInUrl}</h3>
              <h3>GitHub: {student.githubUrl}</h3>
              <h3>YouTube: {student.youtubeUrl}</h3>
              <h3>Phone: {student.phoneNumber}</h3>
              <h4>Description: {student.description}</h4>
            </div>
        )
    }
}
