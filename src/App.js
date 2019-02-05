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

import Navigation from "./components/pages/Navigation";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import RoundsPage from "./components/pages/RoundsPage";
import ProfilePage from "./components/pages/ProfilePage";
import RoundSheetPage from "./components/pages/RoundSheetPage";
import DashboardPage from "./components/pages/DashboardPage";

class App extends Component {
  state = { visible: false };

  handleSidebarHide = () => this.props.hideSidebar();

  routes = () => {
    return (
      <div style={{ height: "1000px" }}>
        <Route path="/" component={Navigation} />
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
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item onClick={() => console.log(this.props)}>
              <Icon name="chart area" />
              Dashboard
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="clipboard outline" />
              Round Sheet
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="folder open outline" />
              Rounds
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="address card outline" />
              Profile
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
