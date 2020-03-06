import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";

import { WeatherDetailsStyle } from "../styles/WeatherDetailsStyle";

class WeatherDetails extends Component {
  render() {
    return (
      <WeatherDetailsStyle>
        <CurrentWeather />
      </WeatherDetailsStyle>
    );
  }
}
export default WeatherDetails;
