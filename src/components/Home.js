import React from "react";
import Navbar from "./Navbar";
import CitiesSearch from "./CitiesSearch";
import WeatherDetails from "./WeatherDetails";
import Footer from "./Footer";

import { ContainerStyle } from "../styles/ContainerStyle";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContainerStyle>
        <CitiesSearch />
        <WeatherDetails/>
      </ContainerStyle>
      <Footer />
    </>
  );
};

export default Home;
