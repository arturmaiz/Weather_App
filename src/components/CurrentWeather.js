import React, { Component } from "react";
import PropTypes from "prop-types";
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

function CurrentWeather(props) {
  const renderCurrentWeatherTemperature = () => (
    <CurrentWeatherTempratureStyle>
      {props.currentWeather.Temperature &&
        props.currentWeather.Temperature.Metric.Value}
      º
      {props.currentWeather.Temperature &&
        props.currentWeather.Temperature.Metric.Unit}
    </CurrentWeatherTempratureStyle>
  );

  const renderWeatherText = () => (
    <CurrentWeatherTextStyle>
      {props.currentWeather.WeatherText}
    </CurrentWeatherTextStyle>
  );

  const renderCurrentWeatherIcon = () => (
    <CurrentWeatherIconStyle
      src={`https://developer.accuweather.com/sites/default/files/0${props.currentWeather.WeatherIcon}-s.png`}
      alt="icon"
    />
  );

  const renderCurrentWeatherCityName = () => (
    <CurrentDetailsTitleStyle>
      {props.currentCity.LocalizedName}
    </CurrentDetailsTitleStyle>
  );

  const renderLoading = () => {
    if (!props.currentWeather && !props.currentCity) {
      return (
        <SpinnerWrapperStyle>
          <SpinnerStyle className="fas fa-spinner"></SpinnerStyle>
          <p>LOADING...</p>
        </SpinnerWrapperStyle>
      );
    }
  };

  return (
    <>
      <CurrentWeatherDetailsWrapper>
        {renderCurrentWeatherIcon()}
        <CurrentWeatherDetails>
          {renderCurrentWeatherCityName()}
          {renderCurrentWeatherTemperature()}
        </CurrentWeatherDetails>
        <AddToFavorites />
      </CurrentWeatherDetailsWrapper>
      {renderWeatherText()}
      <DailyForecasts />
    </>
  );
}

const mapStateToProps = state => {
  return {
    currentWeather: state.weather.currentWeather,
    currentCity: state.cities.currentCity
  };
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  currentCity: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { getCurrentWeather })(CurrentWeather);
