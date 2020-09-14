import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { ControlPanel } from './controlPanel/ControlPanel';
import logo from './logo-menu.png';


function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="main-navbar">
      <Navbar.Brand href="/">
        <img
          alt="Eyecontrol"
          src={logo}
          width="160"
          height="32"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ControlPanel />
        <Nav className="ml-auto">
          <NavDropdown title="More" id="collasible-nav-dropdown" alignRight>
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
