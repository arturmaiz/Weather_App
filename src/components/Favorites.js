import React from "react";

import Navbar from "./Navbar";
import FavoriteForecasts from "./FavoriteForecasts";
import Footer from "./Footer";

import { ContainerStyle } from "../styles/ContainerStyle";

const Favorites = () => {
  return (
    <>
      <Navbar />
      <ContainerStyle>
        <FavoriteForecasts />
        <Footer />
      </ContainerStyle>
    </>
  );
};

export default Favorites;
