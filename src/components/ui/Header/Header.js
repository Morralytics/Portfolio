import React from 'react';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../../assets/images/MainLogo.png';

const Header = () => {
    return (
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#aboutMe">About me</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
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