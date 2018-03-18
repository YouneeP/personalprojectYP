import React, { Component } from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col} from 'react-bootstrap';
import Background from '../img/background02.png';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <img src={Background} className="img-responsive"/>
      </div>
    );
  }
}

export default Home;
