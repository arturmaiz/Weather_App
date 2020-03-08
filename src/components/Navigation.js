import React from "react";
import { Link } from "react-router-dom";

import ToggleTemperature from "./ToggleTemperature";

import { NavigationStyle } from "../styles/NavigationStyle";

const Navigation = () => {
  return (
    <NavigationStyle>
      <Link to="/">
        <i className="fas fa-home"></i>
        <span>home</span>
      </Link>
      <Link to="/favorites">
        <i className="fas fa-star"></i>
        <span>favorites</span>
      </Link>
      <ToggleTemperature />
    </NavigationStyle>
  );
};

export default Navigation;
