
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navsection.css'

const Navsection = () => {

  return (

    // bootstrap navbar
    <Navbar style={{ backgroundColor: '#1f1d28', color: 'white' }} expand="lg">
      <Container>
        <Navbar.Brand className='nav-header' style={{ color: 'white' }} href="#home">ProAcademy</Navbar.Brand>


        <Nav style={{ display: 'flex', alignItems: 'center' }} className="me-auto">
          <NavLink className='nav-link-item' to='/home'>Home</NavLink>
          <NavLink className='nav-link-item' to='/courses'>Courses</NavLink>
          <NavLink className='nav-link-item' to='/signup'>Get Started</NavLink>
          <NavLink className='nav-link-item' to='/pro'>Get Pro</NavLink>
          <NavLink className='nav-link-item' to='/jobs'>Job Opportunities</NavLink>
          <button className='butn log-in'>Log In</button>
          <button className='butn get-start'>Get Started</button>


        </Nav>

      </Container>
    </Navbar>


  );
};

export default Navsection;