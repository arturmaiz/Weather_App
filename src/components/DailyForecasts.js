import React, { Component } from "react";
import { connect } from "react-redux";

import DailyForecast from "./DailyForecast";

import { DailyForecastsStyle } from "../styles/DailyForecastsStyle";
import { SpinnerStyle } from "../styles/SpinnerStyle";
import { SpinnerWrapperStyle } from "../styles/SpinnerWrapperStyle";

class DailyForecasts extends Component {
  renderDailyForecast = () =>
    this.props.current5Days &&
    this.props.current5Days[1] &&
    this.props.current5Days[1].map(current => (
      <DailyForecast key={current.EpochDate} current={current} />
    ));

  render() {
    if (this.props.current5Days.length < 0) {
      return (
        <SpinnerWrapperStyle>
          <SpinnerStyle className="fas fa-spinner"></SpinnerStyle>
          <p>LOADING...</p>
        </SpinnerWrapperStyle>
      );
    }

    return (
      <DailyForecastsStyle>{this.renderDailyForecast()}</DailyForecastsStyle>
    );
  }
}

const maStateToProps = state => {
  return {
    current5Days: Object.values(state.results.current5Days)
  };
};

export default connect(maStateToProps, {})(DailyForecasts);
