import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../redux/actions/authActions";
import { hideSidebar, showSidebar } from "../../redux/actions/navActions";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Sign the user out
  handleClick = e => {
    localStorage.clear();
    this.props.signout();
    this.props.history.push("/");
  };

  handleSidebar = () => {
    const { visible, showSidebar, hideSidebar } = this.props
    if (visible === false) {
      showSidebar()
    } else {
      hideSidebar()
    }
  }

  render() {
    const loggedIn = localStorage.token ? true : false;
    return (
      <Menu>
        <Menu.Item 
        header
        onClick={this.handleSidebar}
        >Flows</Menu.Item>
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
    signout: () => dispatch(signout()),
    hideSidebar: () => dispatch(hideSidebar()), 
    showSidebar: () => dispatch(showSidebar())
  };
};

const mapStateToProps = state => {
  const { visible } = state.nav 
  return { visible }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
