import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCurrentCity, getCurrentWeather } from "../actions/search.actions";
import { removeFromFavorites } from "../actions/saveToFavorites.acions";

import { FavoriteForecastStyle } from "../styles/FavoriteForecastStyle";
import { FavoriteRemoveButtonStyle } from "../styles/FavoriteRemoveButtonStyle";

toast.configure();
function FavoriteForecast({
  favorite,
  setCurrentCity,
  getCurrentWeather,
  removeFromFavorites,
  history,
  toggleTemperature
}) {
  return (
    <>
      <FavoriteRemoveButtonStyle
        onClick={() =>
          toast.error("City removed from favorites.", {
            autoClose: 4000,
            hideProgressBar: true
          }) && removeFromFavorites(favorite)
        }
      >
        Remove
      </FavoriteRemoveButtonStyle>
      <FavoriteForecastStyle
        onClick={() => {
          setCurrentCity(favorite);
          getCurrentWeather(favorite.Key);
          history.push("/", { fromWhere: "favorite" });
        }}
      >
        <h3>{favorite.LocalizedName}</h3>
        <p>
          {favorite.Temperature && toggleTemperature
            ? favorite.Temperature.Metric.Value
            : favorite.Temperature && favorite.Temperature.Imperial.Value}
          º
          {favorite.Temperature && toggleTemperature
            ? favorite.Temperature.Metric.Unit
            : favorite.Temperature && favorite.Temperature.Imperial.Unit}
        </p>
        <p>{favorite.WeatherText}</p>
      </FavoriteForecastStyle>
    </>
  );
}

FavoriteForecast.propTypes = {
  favorite: PropTypes.object.isRequired,
  toggleTemperature: PropTypes.bool.isRequired
};

export default connect(null, {
  setCurrentCity,
  removeFromFavorites,
  getCurrentWeather
})(withRouter(FavoriteForecast));
