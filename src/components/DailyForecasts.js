import React, { Component } from "react";
import DailyForecast from "./DailyForecast";

import { DailyForecastsStyle } from "../styles/DailyForecastsStyle";

class DailyForecasts extends Component {
  render() {
    return (
      <DailyForecastsStyle>
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
      </DailyForecastsStyle>
    );
  }
}

export default DailyForecasts;
