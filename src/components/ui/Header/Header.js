import React from 'react';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nick Morris</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About me</Nav.Link>
              <Nav.Link href="#pricing">Work</Nav.Link>
              <Nav.Link href="#deets">Resume</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">New Inquieries</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;