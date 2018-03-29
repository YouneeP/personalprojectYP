import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './components/home';
import User from './components/user';
import Registration from './components/registration';
import Login from './components/login';
import Record from './components/record';
global.jQuery = require('jquery');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="App-Navbar">
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                  <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link to="/registration" className="nav-link">Sign up</Link></li>
                  <li className="nav-item"><Link to="/signin" className="nav-link">Sign in</Link></li>
                  <li className="nav-item"><Link to="/user" className="nav-link">User</Link></li>
                  <li className="nav-item"><Link to="/record" className="nav-link">Record</Link></li>
                </ul>
              </nav>
            </div>
            <Route path="/home" component={Home} />
            <Route path="/registration" component={Registration}/>
            <Route path="/user" component={User}/>
            <Route path="/signin" component={Login}/>
            <Route path="/record" component={Record}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
