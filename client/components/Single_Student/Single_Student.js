/* eslint-disable complexity */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import YouTubePlayer from '../YouTubePlayer';
import EditStarRating from '../StarRatings/EditStarRating';

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

                <div id="heading">
                    <EditStarRating />
                    <h1>{student.firstName}{' '}{student.lastName}</h1>
                </div>
                <br />

                <div id="youtube">
                {student.youtubeUrl
                    ? <YouTubePlayer url={student.youtubeUrl} width={640} height={385} />
                    : <h4>This student's video is not currently available</h4>
                }
                </div>
                <br />

                <div id="singleAbout">
                    <h4>About {student.firstName}</h4>
                    {student.description
                        ? <p>{student.description}</p>
                        : <p>No description available yet</p>
                    }
                </div>
                <br />

                <div id="contactInfo">
                    <h4>{student.firstName}'s Contact Information</h4>
                    <p>email: {student.email}</p>
                    {student.phoneNumber
                        ? <p>Phone: {student.phoneNumber}</p>
                        : null
                    }
                </div>
                <br />

                <div id="singleLinks">
                    {student.LinkedInUrl || student.githubUrl
                        ? <h4>Additional Information For {student.firstName}</h4>
                        : null
                    }
                    {student.LinkedInUrl
                        ? <a href={student.LinkedInUrl}>LinkedIn</a>
                        : null
                    }
                    {' '}
                    {student.githubUrl
                        ? <a href={student.githubUrl}>GitHub</a>
                        : null
                    }
                </div>
            </div>
        )
    }
}
