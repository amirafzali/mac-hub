import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import '../../Styling/Nav.css';

const Navigation = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Oaky.io</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amirafzali"><i className="fa fa-linkedin-square" style={{ fontSize: '40px', color: '#FFA500' }} /></Nav.Link>
      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.github.com/amirafzali"><i className="fa fa-github-square" style={{ fontSize: '40px', color: '#8adbff' }} /></Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigation;
