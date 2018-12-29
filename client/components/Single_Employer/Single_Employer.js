/* eslint-disable complexity */
/* eslint-disable camelcase */

import React, { Component } from 'react';
import { getVideoName } from '../../util';

export default class Single_Employer extends Component {

    componentDidMount(){
        this.props.fetchSingleEmployer();
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.employerId !== this.props.match.params.employerId) {
            this.props.fetchSingleEmployer();
          }
    }

    render() {   
        const { employer } = this.props;

        return (
            <div key={employer.id}>
                <div id="heading">
                    <h1>{employer.name}</h1>
                    {employer.logoUrl
                        ? <img src={employer.logoUrl} id="allStudentPics" />
                        : null
                    }
                </div>
                
                <div id="video">
                {employer.youtubeUrl && employer.youtubeUrl.length > 0
                    ? <iframe width="640" height="390" src={`https://www.youtube.com/embed/${getVideoName(employer.youtubeUrl)}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
                    : <h4>This company's video is not currently available</h4>
                }
                </div>

                <div id="singleAbout">
                    <h4>About {employer.name}</h4>
                    {employer.description
                        ? <p>{employer.description}</p>
                        : <p>No description available yet</p>
                    }
                    {employer.industry
                        ? <p>Industry: {employer.industry}</p>
                        : null
                    }
                </div>

                <div id="contactInfo">
                    <h4>Contact Information</h4>
                    <p>email: {employer.email}</p>
                    {employer.phoneNumber
                        ? <p>Phone: {employer.phoneNumber}</p>
                        : null
                    }
                </div>
                <br />

                <div id="singleLinks">
                    {employer.LinkedInUrl || employer.gitHubUrl
                        ? <h4>Additional Information about {employer.name}</h4>
                        : null
                    }
                    {employer.LinkedInUrl
                        ? <a href={employer.LinkedInUrl}>LinkedIn</a>
                        : null
                    }
                    {' '}
                    {employer.gitHubUrl
                        ? <a href={employer.gitHubUrl}>GitHub</a>
                        : null
                    }
                </div>
            </div>
        )
    }
}
