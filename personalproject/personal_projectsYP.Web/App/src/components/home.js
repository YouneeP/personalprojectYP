import React, { Component } from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col} from 'react-bootstrap';
import Background from '../img/background02.png';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="card">
          <img className="card-img-top img-responsive m-b-sm" src={Background} />
              <div className="card-body">
                  <p>test</p>
              </div>
        </div>
      </div>
    );
  }
}

export default Home;
