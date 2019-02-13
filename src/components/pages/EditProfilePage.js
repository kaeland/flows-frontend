import React, { Component } from "react";
import { connect } from "react-redux";
import { APP_URL, fetchProfile, editProfile } from "../../utils/routes";

import { Segment, Form, Input, Button, Grid, Message } from "semantic-ui-react";

class EditProfilePage extends Component {
  state = {
    first_name: "",
    last_name: "",
    bio: "",
    id: undefined
  };

  componentDidMount() {
    fetchProfile().then(user => {
      const { first_name, last_name, bio, id } = user;

      this.setState({
        id,
        first_name,
        last_name,
        bio
      });
    });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { id, first_name, last_name, bio } = this.state
  //   const userObj = {
  //     user: {
  //       first_name,
  //       last_name,
  //       bio
  //     }
  //   }
  //   editProfile(id, userObj).then(console.log)
  // }

  handleSubmit = e => {
    e.preventDefault();
    const { bio, first_name, last_name, id } = this.state;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user: {
          bio,
          first_name,
          last_name
        }
      })
    };
    fetch(`${APP_URL}/users/${id}`, options)
      .then(res => res.json())
      .then(console.log)
      .then(() => this.props.history.push("/profile"));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Grid verticalAlign="middle">
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={8} widescreen={8}>
            <Message color="blue">
              <h4>Use the form below to Edit your user profile.</h4>
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column mobile={14} computer={8} widescreen={8}>
            <Segment style={{ marginTop: "50px" }} color="blue">
              <h1>Edit Profile:</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  name="first_name"
                  label="First Name:"
                  placeholder="first name..."
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  name="last_name"
                  label="Last Name:"
                  placeholder="last name..."
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
                <Form.TextArea
                  name="bio"
                  label="Bio:"
                  placeholder="user bio..."
                  value={this.state.bio}
                  onChange={this.handleChange}
                />
                <Button color="green" type="submit">Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect()(EditProfilePage);
