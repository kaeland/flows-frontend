import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item header>Flows</Menu.Item>
        <Menu.Item>
          <Button>Sign up</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Login</Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;