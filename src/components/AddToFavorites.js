import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  saveToFavorites,
  removeFromFavorites
} from "../actions/saveToFavorites.acions";

import { FavoriteIconStyle } from "../styles/FavoriteIconStyle";
import { FavoritesWrapperStyle } from "../styles/FavoritesWrapperStyle";

const AddToFavorites = ({
  city,
  saveToFavorites,
  removeFromFavorites,
  favorites
}) => {
  const isAdd =
    favorites &&
    !favorites.find(favorite => favorite.LocalizedName === city.LocalizedName);

  return (
    <FavoritesWrapperStyle>
      <FavoriteIconStyle
        onClick={() =>
          isAdd ? saveToFavorites(city) : removeFromFavorites(city)
        }
        className="far fa-heart"
      >
        {isAdd ? "add to favorites" : "remove from favorites"}
      </FavoriteIconStyle>
    </FavoritesWrapperStyle>
  );
};

const mapStateToProps = state => {
  return {
    city: state.cities.currentCity,
    favorites: state.favorites
  };
};

AddToFavorites.propTypes = {
  city: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {
  saveToFavorites,
  removeFromFavorites
})(AddToFavorites);
