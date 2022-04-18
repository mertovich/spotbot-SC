import React from 'react'
import {Container, Navbar, Nav, } from 'react-bootstrap'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={Logo} alt='' height='50px' width='50px' /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to='/' className='nav-link'>Bot</Link>
        <Link to='/users' className='nav-link'>Users</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar