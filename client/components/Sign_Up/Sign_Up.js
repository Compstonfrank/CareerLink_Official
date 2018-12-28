
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form_Student_Container from '../Form_Student/Form_Student_Container';
import Form_Employer from '../Form_Employer/Form_Employer';

class Sign_Up extends Component {
    constructor(){
        super()
        this.state = {
            showComponent: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        // this captures the option being selected, but not submitted.
        this.setState({
            showComponent: event.target.value
        })
    }

    handleClick() {
        
    }

    render() {
        return (
            <div>
                <h1> Sign Up With Career Link! </h1>

                <h3>For Quick Sign-Up...</h3>
                <div id="signUpButtons">
                    <button onClick={this.handleClick} type="button" id="google"> Sign up with Google </button>
                    <br />
                    <button onClick={this.handleClick} type="button" id="github"> Sign up with GitHub </button>
                    <br />
                    <button onClick={this.handleClick} type="button" id="facebook"> Sign up with Facebook </button>
                </div>
                <br />

                <span> or </span>
                <br />

                <h3> Register With Us! </h3>

                    <div id="user-type">
                        <label name="signup"> Please indicate your user type: </label>
                        <select onChange={this.handleChange} name="signup" value={this.state.showComponent}>
                            <option key="" value=""> -- </option>
                            <option key="Student" value="Student"> Student </option>
                            <option key="Employer" value="Employer"> Employer </option>
                        </select>
                    </div>
                    <div>
                        <h5>Students</h5>
                        {this.state.showComponent
                        ? <Form_Student_Container />
                        : null}
                        <h5>Employers</h5>
                        {this.state.employer
                        ? <Form_Employer />
                        : null}
                    </div>
            </div>
        )
    }
}

export default Sign_Up;