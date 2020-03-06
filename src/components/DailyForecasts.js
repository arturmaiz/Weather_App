import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DailyForecast from "./DailyForecast";

import { DailyForecastsStyle } from "../styles/DailyForecastsStyle";
import { SpinnerStyle } from "../styles/SpinnerStyle";
import { SpinnerWrapperStyle } from "../styles/SpinnerWrapperStyle";

function DailyForecasts(props) {
  const renderDailyForecast = () =>
    props.current5Days &&
    props.current5Days[1] &&
    props.current5Days[1].map(current => (
      <DailyForecast key={current.EpochDate} current={current} />
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
    current5Days: Object.values(state.weather.current5Days)
  };
};

DailyForecasts.propTypes = {
  current5Days: PropTypes.array.isRequired
}

export default connect(maStateToProps, {})(DailyForecasts);
