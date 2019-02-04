import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Navbar} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App;
