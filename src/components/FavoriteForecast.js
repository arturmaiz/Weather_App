import React from "react";
import { connect } from "react-redux";
import { FavoriteForecastStyle } from "../styles/FavoriteForecastStyle";
import { setCurrentCity } from "../actions/search.actions";
import { withRouter } from "react-router-dom";
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

export default connect(null, { setCurrentCity })(withRouter(FavoriteForecast));
