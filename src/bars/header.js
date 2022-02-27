import React from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar';
import { Nav,NavDropdown,Container} from 'react-bootstrap'
const Header=() =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
        <Container>
        <Navbar.Brand href="/"> <img
          alt=""
          src= {require("../images/Deeksha2.jpeg")}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/paintings">Paintings</Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about/aboutme">About Me!</NavDropdown.Item>
              <NavDropdown.Item href="/about/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tech Stack</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
     
</Navbar>
  )
}

export default Header