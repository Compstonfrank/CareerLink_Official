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
                <img src={employer.logoUrl} id="allStudentPics" />
                <h3>name: {employer.name}</h3>

                <div id="youtube">
                {employer.youtubeUrl && employer.youtubeUrl.length > 0
                    ? <iframe width="640" height="390" src={`https://www.youtube.com/embed/${getVideoName(employer.youtubeUrl)}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
                    : <h4>This company's video is not currently available</h4>
                }
                </div>

                <h4>industry: {employer.industry}</h4>
                <p>email: {employer.email}</p>
                <p>linkedIn: {employer.LinkedInUrl}</p>
                <p>GitHub: {employer.gitHubUrl}</p>
                <p>Phone: {employer.phoneNumber}</p>
                <p>Description: {employer.description}</p>
            </div>
        )
    }
}
