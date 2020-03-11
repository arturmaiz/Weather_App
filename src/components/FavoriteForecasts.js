import React, { Component } from "react";
import PropTypes from "prop-types";
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

    if (favorites.length === 0) {
      return (
        <h1>
          No Favorites{" "}
          <span role="img" aria-label="img">
            🦄
          </span>
        </h1>
      );
    }

    const renderFavorite = () => {
      return favorites.map(favorite => (
        <FavoriteForecast
          key={favorite.Key}
          favorite={favorite}
          toggleTemperature={this.props.toggleTemperature}
        />
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
    isLoading: state.cities.loading,
    toggleTemperature: state.toggleTemperature.value
  };
};

FavoriteForecasts.propTypes = {
  favorites: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  toggleTemperature: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { getFavoritesWeather })(
  FavoriteForecasts
);
