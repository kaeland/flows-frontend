import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../redux/actions/authActions";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  handleClick = e => {
    localStorage.clear();
    this.props.signout();
    this.props.history.push('/')
  };

  render() {
    const loggedIn = localStorage.token ? true : false;
    return (
      <Menu>
        <Menu.Item header>Flows</Menu.Item>
        {loggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item>
              <Button onClick={this.handleClick}>Sign out</Button>
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
