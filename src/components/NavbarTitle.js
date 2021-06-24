import React from "react";
import Logo from "./Logo";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const NavbarTitle = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <Logo />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Email: info@quictest.id</Nav.Link>
              <Nav.Link >Telp: 0212138377 / 02121383888 / 02121383999</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarTitle;
