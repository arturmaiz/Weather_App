import React from "react";
import Navigation from "../components/Navigation";
import { NavbarStyle } from "../styles/NavbarStyle";
import { LogoStyle } from "../styles/LogoStyle";

const Navbar = () => {
  return (
    <NavbarStyle>
      <LogoStyle></LogoStyle>
      <Navigation />
    </NavbarStyle>
  );
};

export default Navbar;
