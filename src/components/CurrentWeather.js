import React, { Component } from "react";
import AddToFavorites from "./AddToFavorites";
import DailyForecasts from "./DailyForecasts";

import { CurrentWeatherIconStyle } from "../styles/CurrentWeatherIconStyle";
import { CurrentWeatherDetailsWrapper } from "../styles/CurrentWeatherDetailsWrapper";
import { CurrentWeatherDetails } from "../styles/CurrentWeatherDetails";
import { CurrentDetailsTitleStyle } from "../styles/CurrentDetailsTitleStyle";
import { CurrentWeatherTempratureStyle } from "../styles/CurrentWeatherTempratureStyle";
import { CurrentWeatherTextStyle } from "../styles/CurrentWeatherTextStyle";

class CurrentWeather extends Component {
  render() {
    return (
      <>
        <CurrentWeatherDetailsWrapper>
          <CurrentWeatherIconStyle
            src="https://cdn1.vectorstock.com/i/1000x1000/71/80/weather-icon-with-sun-and-clouds-vector-11107180.jpg"
            alt="icon"
          />
          <CurrentWeatherDetails>
            <CurrentDetailsTitleStyle>Tel Aviv</CurrentDetailsTitleStyle>
            <CurrentWeatherTempratureStyle>34ºC</CurrentWeatherTempratureStyle>
          </CurrentWeatherDetails>
          <AddToFavorites />
        </CurrentWeatherDetailsWrapper>
        <CurrentWeatherTextStyle>sunny</CurrentWeatherTextStyle>
        <DailyForecasts />
      </>
    );
  }
}

export default CurrentWeather;
