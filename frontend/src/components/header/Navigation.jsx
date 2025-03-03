import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">Restaurant</NavbarBrand>
      </Navbar>
    </>
  );
};

export default Navigation;
