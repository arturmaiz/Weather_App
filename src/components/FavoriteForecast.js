import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { setCurrentCity } from "../actions/search.actions";

import { FavoriteForecastStyle } from "../styles/FavoriteForecastStyle";

function FavoriteForecast({ favorite, setCurrentCity, history }) {
  return (
    <FavoriteForecastStyle
      onClick={() => {
        setCurrentCity(favorite);
        history.push("/", { fromWhere: "favorite" });
      }}
    >
      <h3>{favorite.LocalizedName}</h3>
      <p>
        {favorite.Temperature && favorite.Temperature.Metric.Value}º
        {favorite.Temperature && favorite.Temperature.Metric.Unit}
      </p>
      <p>sunny</p>
    </FavoriteForecastStyle>
  );
}

FavoriteForecast.propTypes = {
  favorite: PropTypes.array.isRequired,
}

export default connect(null, { setCurrentCity })(withRouter(FavoriteForecast));
