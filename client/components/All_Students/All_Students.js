/* eslint-disable camelcase */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTubePlayer from '../YouTubePlayer';
import ShowStarRating from '../StarRatings/ShowStarRating';

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
                  <h3>{student.firstName} {student.lastName}</h3>
                  {/* the passed prop needs to be updated to the actual rating. The rating is placed on local state in Single_Student */}
                  <ShowStarRating rating={3} />
                </div>

                <div id="youtube">
                  {student.youtubeUrl
                      ? <YouTubePlayer width={560} height={340} url={student.youtubeUrl} />
                      : <img src={student.photoUrl} id="allStudentPics" />
                  }
                </div>
              </Link>
           
            </div>
          );
        })}
      </div>
    );
  }
}
