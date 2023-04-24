import React, { useState } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from "./Profile";


function NavbarComponent() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
     
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">G3 Technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
            
          </Nav>
          <Nav>
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/projects">Project</Nav.Link>
          
          <NavDropdown title="Customer" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/companies">Companies</NavDropdown.Item>
              <NavDropdown.Item href="/people">
                People
              
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/ourteam">Our Team</Nav.Link>
             
          </Nav>

        <Nav>
          <Nav className="user">
            <img src="public/images.png" alt=""/>
           </Nav>
            <Profile/>
        </Nav> 

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

