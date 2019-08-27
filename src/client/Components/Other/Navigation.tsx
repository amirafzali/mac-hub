import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import '../../Styling/nav.css';

const Navigation = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Oaky.io</Navbar.Brand>
    {/* <Nav className="mr-auto">
      <Nav.Link href="#home">MaxAvg</Nav.Link>
      <Nav.Link href="#features">Info</Nav.Link>
      </Nav> */}
  </Navbar>
);

export default Navigation;
