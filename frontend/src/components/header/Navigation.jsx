import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  NavLink,
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
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/menu">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
