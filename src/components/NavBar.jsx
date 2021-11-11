import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Grid from '@mui/material';


const NavBar = (props) => {

  return (
    <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Hit Stuff!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Paths</Nav.Link>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Funky Fundamentals</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">How to use Schlagzeug!</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Message Your Teacher</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavBar;