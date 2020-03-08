import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  saveToFavorites,
  removeFromFavorites
} from "../actions/saveToFavorites.acions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FavoriteIconStyle } from "../styles/FavoriteIconStyle";
import { FavoritesWrapperStyle } from "../styles/FavoritesWrapperStyle";

toast.configure();

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
          isAdd
            ? toast.success("City added to favorites.", {
                autoClose: 4000,
                hideProgressBar: true
              }) && saveToFavorites(city)
            : toast.error("City removed from favorites.", {
                autoClose: 4000,
                hideProgressBar: true
              }) && removeFromFavorites(city)
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
};

export default connect(mapStateToProps, {
  saveToFavorites,
  removeFromFavorites
})(AddToFavorites);
