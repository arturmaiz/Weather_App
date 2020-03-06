import React, { Component } from "react";

import CurrentWeather from "./CurrentWeather";

import { WeatherDetailsStyle } from "../styles/WeatherDetailsStyle";

function WeatherDetails() {
  return (
    <WeatherDetailsStyle>
      <CurrentWeather />
    </WeatherDetailsStyle>
  );
}
export default WeatherDetails;
