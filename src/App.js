import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PoliciesPage from './pages/PoliciesPage';
import './App.css';
import ExpiringPolicies from './components/home/ExpiringPolicies'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="">
            {/* <LoginPage /> */}


            <Route exact path="/" component={LoginPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/policies" component={PoliciesPage} />
            {/* <Route path="/policies" component={PoliciesPage} /> */}
            <Route path="/expiringpolicies" component={ExpiringPolicies} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
