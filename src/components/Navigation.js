import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="#">
        <i className="fas fa-toggle-on"></i>
        <span>dark mode</span>
      </Link>
    </NavigationStyle>
  );
};

export default Navigation;
