/* eslint-disable camelcase */
import React, { Component } from 'react';

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
                <img src={employer.photoUrl} id="allStudentPics" />
                <h3>name: {employer.name}</h3>
                <h4>industry: {employer.industry}</h4>
                <p>email: {employer.email}</p>
                <p>linkedIn: {employer.LinkedInUrl}</p>
                <p>GitHub: {employer.gitHubUrl}</p>
                <p>YouTube: {employer.youtubeUrl}</p>
                <p>Phone: {employer.phoneNumber}</p>
                <p>Description: {employer.description}</p>
            </div>
        )
    }
}
