/* eslint-disable camelcase */
import React, { Component } from 'react';
import { getVideoName } from '../../util';

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

              <div id="youtube">
                {student.youtubeUrl && student.youtubeUrl.length > 0
                    ? <iframe width="640" height="390" src={`https://www.youtube.com/embed/${getVideoName(student.youtubeUrl)}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
                    : <h4>This student's video is not currently available</h4>
                }
                </div>


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
