/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sign_Up extends Component {
    constructor(){
        super()
        this.state = {
            selection: ''
        }
    }

    handleClickStudent() {
        return this.setState({
            selection: 'student'
        })
    }

    handleClickEmployer() {

    }

    render() {
        return (
        <h1>NEW USER SIGN-UP COMPONENT</h1>
        )
    }
}

export default Sign_Up;
