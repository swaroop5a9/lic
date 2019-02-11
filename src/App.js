import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/home/Header";
import PoliciesPage from "./pages/PoliciesPage";
import "./App.css";
import ExpiringPolicies from "./components/home/ExpiringPolicies";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/policies" component={PoliciesPage} />
          <Route path="/expiring-policies" component={ExpiringPolicies} />
        </div>
      </Router>
    );
  }
}

export default App;
