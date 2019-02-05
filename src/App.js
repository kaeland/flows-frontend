import React, { Component } from "react";
import { connect } from "react-redux";
import { hideSidebar, showSidebar } from "./redux/actions/navActions";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Content
} from "react-router-dom";

import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Navbar from "./components/pages/Navbar";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import RoundsPage from "./components/pages/RoundsPage";
import ProfilePage from "./components/pages/ProfilePage";
import RoundSheetPage from "./components/pages/RoundSheetPage";
import DashboardPage from "./components/pages/DashboardPage";

class App extends Component {
  handleSidebarHide = () => this.props.hideSidebar();

  routes = () => {
    return (
      <div style={{ height: "1000px" }}>
        <Route path="/" component={Navbar} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/rounds" exact component={RoundsPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/roundsheet" exact component={RoundSheetPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
      </div>
    );
  };

  render() {
    const { visible } = this.props;
    return (
      <Router>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item>
              <Link to="/dashboard">
                <Icon name="chart area" />
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/roundsheet">
                <Icon name="clipboard outline" />
                Round Sheet
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/rounds">
                <Icon name="folder open outline" />
                Rounds
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/profile">
                <Icon name="address card outline" />
                Profile
              </Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>{this.routes()}</Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { visible } = state.nav;
  return { visible };
};

const mapDispatchToProps = dispatch => {
  return {
    hideSidebar: () => dispatch(hideSidebar()),
    showSidebar: () => dispatch(showSidebar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
