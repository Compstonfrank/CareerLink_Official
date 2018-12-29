/* eslint-disable camelcase */

import React, { Component } from 'react';
import YouTubePlayer from '../YouTubePlayer';

function utilityFunctionVideoName(url) {
    if (url.includes('https://youtu.be/') === true) {
        return url.slice(17)
    } else if (url.includes('https://www.youtube.com/watch?v=') === true) {
        return url.slice(32);
    } else if (url.includes('https://www.youtube.com/embed/') === true) {
        return url.slice(30);
    } else {
        console.log('video source may not be recognized')
    }
}

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

                <ul class="form">
                    <li class="rating">
                        <input type="radio" name="rating" value="0" checked /><span class="hide"></span>
                        <input type="radio" name="rating" value="1" /><span></span>
                        <input type="radio" name="rating" value="2" /><span></span>
                        <input type="radio" name="rating" value="3" /><span></span>
                        <input type="radio" name="rating" value="4" /><span></span>
                        <input type="radio" name="rating" value="5" /><span></span>
                    </li>
                </ul>

                <div id="youtube">
                {employer.youtubeUrl && employer.youtubeUrl.length > 0
                    ? <iframe width="640" height="390" src={`https://www.youtube.com/embed/${utilityFunctionVideoName(employer.youtubeUrl)}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
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
