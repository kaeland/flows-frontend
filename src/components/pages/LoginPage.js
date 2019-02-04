import React, { Component } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import { APP_URL } from '../../utils/routes'

class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value
    })
    console.log("Name: ", e.target.name, "Value: ", value);
  };

  login = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username, 
          password
        }
      })
    }

    fetch(`${APP_URL}/login`, options)
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <Form onSubmit={this.login}>
        <Form.Input
          name="username"
          label="Username"
          placeholder="Username..."
          onChange={this.handleChange}
        />
        <Form.Input
          name="password"
          label="Password"
          placeholder="Password..."
          onChange={this.handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default LoginPage;
