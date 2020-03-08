import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DailyForecast from "./DailyForecast";

import { DailyForecastsStyle } from "../styles/DailyForecastsStyle";
import { SpinnerStyle } from "../styles/SpinnerStyle";
import { SpinnerWrapperStyle } from "../styles/SpinnerWrapperStyle";

function DailyForecasts(props) {
  if (!props.current5Days) {
    return "Loading...";
  }

  const renderDailyForecast = () =>
    props.current5Days &&
    props.current5Days.map(current => (
      <DailyForecast
        key={current.EpochDate}
        current={current}
        fahrenheit={props.fahrenheit}
        toggleTemperature={props.toggleTemperature}
      />
    ));

  if (props.current5Days.length < 0) {
    return (
      <SpinnerWrapperStyle>
        <SpinnerStyle className="fas fa-spinner"></SpinnerStyle>
        <p>LOADING...</p>
      </SpinnerWrapperStyle>
    );
  }

  return <DailyForecastsStyle>{renderDailyForecast()}</DailyForecastsStyle>;
}

const maStateToProps = state => {
  return {
    current5Days: state.weather.current5Days,
    toggleTemperature: state.toggleTemperature.value
  };
};

DailyForecasts.propTypes = {
  current5Days: PropTypes.array.isRequired,
  toggleTemperature: PropTypes.bool.isRequired
};

export default connect(maStateToProps, {})(DailyForecasts);
