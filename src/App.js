import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import LoginPage from "./components/pages/LoginPage";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Navbar} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
