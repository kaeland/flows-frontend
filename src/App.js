import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Navigation from "./components/pages/Navigation";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import RoundsPage from "./components/pages/RoundsPage";
import ProfilePage from "./components/pages/ProfilePage";
import RoundSheetPage from "./components/pages/RoundSheetPage";
import DashboardPage from "./components/pages/DashboardPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Navigation} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/rounds" exact component={RoundsPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/roundsheet" exact component={RoundSheetPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
        </div>
      </Router>
    );
  }
}

export default App;
