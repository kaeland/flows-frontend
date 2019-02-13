import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Input, Button, Grid, Message } from "semantic-ui-react";
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
          this.props.history.push("/dashboard");
        } else {
          // console.log(data)
          this.props.error({ message });
        }
      });
  };

  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={8} widescreen={8}>
            <Message color="blue">
              <h4>Use the form below to Sign Up to the Flows App</h4>
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={8} widescreen={8}>
            <Segment style={{ marginTop: "50px" }} color="blue">
              <h1>Sign up:</h1>
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
                <Button color="green" type="submit">
                  Submit
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
