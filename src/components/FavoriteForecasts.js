import React, { Component } from "react";
import { connect } from "react-redux";
import { getFavoritesWeather } from "../actions/search.actions";
import FavoriteForecast from "./FavoriteForecast";

import { SpinnerStyle } from "../styles/SpinnerStyle";
import { SpinnerWrapperStyle } from "../styles/SpinnerWrapperStyle";

class FavoriteForecasts extends Component {
  componentDidMount() {
    this.props.getFavoritesWeather(this.props.favorites);
  }

  render() {
    const { isLoading, favorites } = this.props;
    const renderFavorite = () => {
      return this.props.favorites.map(favorite => (
        <FavoriteForecast key={favorite.Key} favorite={favorite} />
      ));
    };

    const loader = (
      <SpinnerWrapperStyle>
        <SpinnerStyle className="fas fa-spinner"></SpinnerStyle>
        <p>LOADING...</p>
      </SpinnerWrapperStyle>
    );
    return <div>{!isLoading ? renderFavorite() : loader}</div>;
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    isLoading: state.results.loading
  };
};

export default connect(mapStateToProps, { getFavoritesWeather })(
  FavoriteForecasts
);
