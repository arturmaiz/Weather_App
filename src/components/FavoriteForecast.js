import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { setCurrentCity } from "../actions/search.actions";
import { removeFromFavorites } from "../actions/saveToFavorites.acions";

import { FavoriteForecastStyle } from "../styles/FavoriteForecastStyle";
import { FavoriteRemoveButtonStyle } from "../styles/FavoriteRemoveButtonStyle";

function FavoriteForecast({
  favorite,
  setCurrentCity,
  removeFromFavorites,
  history,
  toggleTemperature
}) {
  return (
    <>
      <FavoriteRemoveButtonStyle onClick={() => removeFromFavorites(favorite)}>
        Remove
      </FavoriteRemoveButtonStyle>
      <FavoriteForecastStyle
        onClick={() => {
          setCurrentCity(favorite);
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

export default connect(null, { setCurrentCity, removeFromFavorites })(
  withRouter(FavoriteForecast)
);
