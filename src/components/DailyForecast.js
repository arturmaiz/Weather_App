import React from "react";
import PropTypes from "prop-types";
import { convertFtoC } from "../utils/convertFtoC";

import { DailyForecastStyle } from "../styles/DailyForecastStyle";

const DailyForecast = ({ current, toggleTemperature }) => {
  const { Maximum, Minimum } = current.Temperature;

  const timestampInMS = current.EpochDate * 1000;
  const date = new Date(timestampInMS);
 
  return (
    <DailyForecastStyle>
      <h3>{date.toLocaleString("en-us", { weekday: "short" })}</h3>
      <p>
        {toggleTemperature ? convertFtoC(Minimum.Value) : Minimum.Value} º
        {toggleTemperature ? "C" : Minimum.Unit} -{" "}
        {toggleTemperature ? convertFtoC(Maximum.Value) : Maximum.Value}º
        {toggleTemperature ? "C" : Minimum.Unit}
      </p>
    </DailyForecastStyle>
  );
};

DailyForecast.propTypes = {
  current: PropTypes.object.isRequired
};

export default DailyForecast;
