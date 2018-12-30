import React, { Component } from 'react';
import axios from 'axios'

class LocalLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password : ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('/api/auth/local/type', this.state);
      console.log('------->', data);
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Email: </label>
        <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />

        <label> Password: </label>
        <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />

        <div>
          <button type="submit"> Login </button>
        </div>
      </form>
    )
  }
}

export default LocalLogin;
