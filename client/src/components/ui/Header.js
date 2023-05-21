import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles= {
    linkLogoColor: {
      color: '#1E3050'
    },
    bgDarkCustom: {
      backgroundColor: '#212529',
      boxShadow: 'none'
    },
    custom: {
      backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e")'
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={styles.bgDarkCustom}>
      <Container>
        <Link to='/' className='navbar-brand'>
          <img
            src="images/MainLogo.png"
            width='75'
            height='60'
            className='d-inline-block align-top'
            alt='Brand Logo'
          />
        </Link>
        <Navbar.Toggle type='button' aria-label='Toggle navigation' className='navbar-toggler collapsed'>
          <span className='navbar-toggler-icon' style={styles.custom}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/About' className='nav-link'>About me</Link>
            <Link to='/Work' className='nav-link'>Work</Link>
            <Link to='/Resume' className='nav-link'>Resume</Link>
          </Nav>
          <Nav>
            <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to='/Contact' style={styles.linkLogoColor}><FontAwesomeIcon icon={faEnvelope} style={styles.linkLogoColor}/>{' '}Email</Link></NavDropdown.Item>
              
                <NavDropdown.Item href="https://www.linkedin.com/in/nick-morris-morralytics" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={styles.linkLogoColor}/>{' '}LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Morralytics" target='_blank'><FontAwesomeIcon icon={faSquareGithub} style={styles.linkLogoColor}/>{' '}GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;