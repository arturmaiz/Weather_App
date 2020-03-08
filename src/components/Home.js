import React from "react";

import Navbar from "./Navbar";
import CitiesSearch from "./CitiesSearch";
import WeatherDetails from "./WeatherDetails";

import { ContainerStyle } from "../styles/ContainerStyle";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContainerStyle>
        <CitiesSearch />
        <WeatherDetails />
      </ContainerStyle>
    </>
  );
};

export default Home;
