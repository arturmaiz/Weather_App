import React from "react";

import Navbar from "./Navbar";
import FavoriteForecasts from "./FavoriteForecasts";

import { ContainerStyle } from "../styles/ContainerStyle";

const Favorites = () => {
  return (
    <>
      <Navbar />
      <ContainerStyle>
        <FavoriteForecasts />
      </ContainerStyle>
    </>
  );
};

export default Favorites;
