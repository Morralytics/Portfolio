import React from 'react';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../MainLogo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img 
                src={logo}
                width='75'
                height='60'
                className='d-inline-block align-top'
                alt='Brand Logo' 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="About">About me</Nav.Link>
              <Nav.Link href="Work">Work</Nav.Link>
              <Nav.Link href="Resume">Resume</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#newInquiry">New Inquiry</NavDropdown.Item>
                <NavDropdown.Item href="#linkedIn">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="#gitHub">GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;