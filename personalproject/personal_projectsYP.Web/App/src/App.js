import React, { Component } from 'react';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './components/home';
import User from './components/user';
import Registration from './components/registration';
global.jQuery = require('jquery');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="App-Navbar">
              <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand">Test Name</a>
                  </div>
                <ul className="nav navbar-nav">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/registration">Sign up</Link></li>
                  <li><Link to="/user">User</Link></li>
                </ul>
                </div>
              </nav>
            </div>
            <Route path="/home" component={Home} />
            <Route path="/registration" component={Registration}/>
            <Route path="/user" component={User}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
