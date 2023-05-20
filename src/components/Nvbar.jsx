import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

import Icon from '../assets/cmpny-logo.png';



function Nvbar() {
    return (
    <>
   <Navbar bg="light" variant="light" id='nav'>
        <Container>
            <Navbar.Brand href="#home"><img src={Icon } alt='logo'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Career</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Who We're</Nav.Link>
              <Nav.Link href="#">What we do</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
</>
  )
}

export default Nvbar;