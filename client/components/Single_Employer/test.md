/* eslint-disable camelcase */

import React, { Component } from 'react';
import YouTubePlayer from '../YouTubePlayer';

function utilityFunctionVideoName(url) {
    let urlLink = 'https://www.youtube.com/embed/';
    //if the link is https://youtu.be/... we need to remove the 'https://youtu.be/' and just capture the remainder for use in the iframe tag.
    if (url.includes('https://youtu.be/') === true) {
        urlLink += url.slice(17)
    //if the link is https://www.youtube.com/watch?v=... we need to remove the 'https://www.youtube.com/watch?v=' and just capture the remainder for use in the iframe tag.
    } else if (url.includes('https://www.youtube.com/watch?v=') === true) {
        urlLink += url.slice(32);
    //if the link is https://www.youtube.com/embed/... we need to remove the 'https://www.youtube.com/embed/' and just capture the remainder for use in the iframe tag.
    } else if (url.includes('https://www.youtube.com/embed/') === true) {
        urlLink += url.slice(30);
    } else {
        console.log('video source may not be recognized, default video rendered instead')
        urlLink = 'https://www.youtube.com/embed/sIhQMyBsSVE';
    }
    return urlLink;
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
        // const youtubeUrl = utilityFunctionVideoName(employer.youtubeUrl)
        // {employer.youtubeUrl
        //     ? console.log(utilityFunctionVideoName(employer.youtubeUrl))
        //     : console.log('nothing to render');
        // }
        return (
            <div key={employer.id}>
                <img src={employer.logoUrl} id="allStudentPics" />
                <h3>name: {employer.name}</h3>
                <h4>industry: {employer.industry}</h4>
                <p>email: {employer.email}</p>
                <p>linkedIn: {employer.LinkedInUrl}</p>
                <p>GitHub: {employer.gitHubUrl}</p>
                <p>YouTube: {employer.youtubeUrl}</p>
                {/* <YouTubePlayer /> */}
                {employer.youtubeUrl
                    ? <iframe width="640" height="390" src={utilityFunctionVideoName(employer.youtubeUrl)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>))
                    : console.log('nothing to render');
                }
                <p>Phone: {employer.phoneNumber}</p>
                <p>Description: {employer.description}</p>
            </div>
        )
    }
}

