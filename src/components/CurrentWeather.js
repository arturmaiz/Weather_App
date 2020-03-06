import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentWeather } from "../actions/search.actions";

import AddToFavorites from "./AddToFavorites";
import DailyForecasts from "./DailyForecasts";

import { CurrentWeatherIconStyle } from "../styles/CurrentWeatherIconStyle";
import { CurrentWeatherDetailsWrapper } from "../styles/CurrentWeatherDetailsWrapper";
import { CurrentWeatherDetails } from "../styles/CurrentWeatherDetails";
import { CurrentDetailsTitleStyle } from "../styles/CurrentDetailsTitleStyle";
import { CurrentWeatherTempratureStyle } from "../styles/CurrentWeatherTempratureStyle";
import { CurrentWeatherTextStyle } from "../styles/CurrentWeatherTextStyle";
import { SpinnerStyle } from "../styles/SpinnerStyle";
import { SpinnerWrapperStyle } from "../styles/SpinnerWrapperStyle";

class CurrentWeather extends Component {
  renderCurrentWeatherTemperature = () => (
    <CurrentWeatherTempratureStyle>
      {this.props.currentWeather.Temperature &&
        this.props.currentWeather.Temperature.Metric.Value}
      º
      {this.props.currentWeather.Temperature &&
        this.props.currentWeather.Temperature.Metric.Unit}
    </CurrentWeatherTempratureStyle>
  );

  renderWeatherText = () => (
    <CurrentWeatherTextStyle>
      {this.props.currentWeather.WeatherText}
    </CurrentWeatherTextStyle>
  );

  renderCurrentWeatherIcon = () => (
    <CurrentWeatherIconStyle
      src={`https://developer.accuweather.com/sites/default/files/0${this.props.currentWeather.WeatherIcon}-s.png`}
      alt="icon"
    />
  );

  renderCurrentWeatherCityName = () => (
    <CurrentDetailsTitleStyle>
      {this.props.currentCity.LocalizedName}
    </CurrentDetailsTitleStyle>
  );

  renderLoading = () => {
    if (!this.props.currentWeather && !this.props.currentCity) {
      return (
        <SpinnerWrapperStyle>
          <SpinnerStyle className="fas fa-spinner"></SpinnerStyle>
          <p>LOADING...</p>
        </SpinnerWrapperStyle>
      );
    }
  };

  render() {
    return (
      <>
        <CurrentWeatherDetailsWrapper>
          {this.renderCurrentWeatherIcon()}
          <CurrentWeatherDetails>
            {this.renderCurrentWeatherCityName()}
            {this.renderCurrentWeatherTemperature()}
          </CurrentWeatherDetails>
          <AddToFavorites />
        </CurrentWeatherDetailsWrapper>
        {this.renderWeatherText()}
        <DailyForecasts />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentWeather: state.results.currentWeather,
    currentCity: state.results.currentCity
  };
};

export default connect(mapStateToProps, { getCurrentWeather })(CurrentWeather);
