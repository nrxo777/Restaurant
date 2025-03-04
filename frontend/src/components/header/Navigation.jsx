import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <Navbar color="dark" dark expand="sm">
        <NavbarToggler onClick={navToggle} />
        <NavbarBrand href="/">Epic Bites</NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
