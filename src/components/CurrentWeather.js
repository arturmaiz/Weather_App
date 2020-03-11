import React from "react";
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

function CurrentWeather(props) {
  const renderCurrentWeatherTemperature = () => (
    <CurrentWeatherTempratureStyle>
      {props.currentWeather.Temperature && props.toggleTemperature
        ? props.currentWeather.Temperature.Metric.Value
        : props.currentWeather.Temperature &&
          props.currentWeather.Temperature.Imperial.Value}
      º
      {props.currentWeather.Temperature && props.toggleTemperature
        ? props.currentWeather.Temperature.Metric.Unit
        : props.currentWeather.Temperature &&
          props.currentWeather.Temperature.Imperial.Unit}
    </CurrentWeatherTempratureStyle>
  );

  const renderWeatherText = () => (
    <CurrentWeatherTextStyle>
      {props.currentCity.WeatherText}
    </CurrentWeatherTextStyle>
  );

  const renderCurrentWeatherIcon = () => (
    <CurrentWeatherIconStyle
      src={`https://developer.accuweather.com/sites/default/files/${
        props.currentWeather.WeatherIcon < 10
          ? "0" + props.currentWeather.WeatherIcon
          : props.currentWeather.WeatherIcon
      }-s.png`}
      alt="icon"
    />
  );

  const renderCurrentWeatherCityName = () => (
    <CurrentDetailsTitleStyle>
      {props.currentCity.LocalizedName}
    </CurrentDetailsTitleStyle>
  );

  if (props.loading) {
    return null;
  }

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
    currentCity: state.cities.currentCity,
    toggleTemperature: state.toggleTemperature.value,
    loading: state.weather.loading
  };
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  currentCity: PropTypes.object.isRequired,
  toggleTemperature: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { getCurrentWeather })(CurrentWeather);
