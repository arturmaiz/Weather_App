import React from "react";
import PropTypes from "prop-types";

import { DailyForecastStyle } from "../styles/DailyForecastStyle";

function DailyForecast({ current }) {
  const { Maximum, Minimum } = current.Temperature;
  const splitDate = String(new Date(current.EpochDate * 1000)).split("");
  const day = splitDate[0] + splitDate[1] + splitDate[2];

  return (
    <DailyForecastStyle>
      <h3>{day}</h3>
      <p>
        {Minimum.Value}º{Minimum.Unit} - {Maximum.Value}º{Maximum.Unit}
      </p>
    </DailyForecastStyle>
  );
}

DailyForecast.propTypes = {
  current: PropTypes.object.isRequired
}

export default DailyForecast;
