import React, { Component } from 'react'
import { Segment, Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username..."/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}