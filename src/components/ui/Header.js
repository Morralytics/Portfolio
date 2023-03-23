import React from 'react';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import logo from '../../MainLogo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/' className='navbar-brand'>
            <img 
                src={logo}
                width='75'
                height='60'
                className='d-inline-block align-top'
                alt='Brand Logo' 
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to='/About' className='nav-link'>About me</Link>
              <Link to='/Work' className='nav-link'>Work</Link>
              <Link to='/Resume' className='nav-link'>Resume</Link>
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