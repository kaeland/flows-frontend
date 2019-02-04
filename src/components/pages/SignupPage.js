import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import { login, error } from "../../redux/actions/authActions";
import { APP_URL } from "../../utils/routes";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value
    });
    // console.log("Name: ", e.target.name, "Value: ", value);
  };

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    };

    fetch(`${APP_URL}/signup`, options)
      .then(res => res.json())
      .then(data => {
        const { user, jwt, message } = data;
        if (message === "success") {
          localStorage.setItem("token", jwt);
          this.props.login(user);
        } else {
          // console.log(data)
          this.props.error({ message });
        }
      });
  };

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

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    error: message => dispatch(error(message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);