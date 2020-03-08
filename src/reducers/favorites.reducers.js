import {
  SAVE_TO_FAVORITES,
  REMOVE_FROM_FAFORITES,
  SET_FAVORITES_WEATHER,
  ADD_FROM_SESSION
} from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  let favorites;
  switch (action.type) {
    case SAVE_TO_FAVORITES:
      favorites = [...state, action.payload];
      sessionStorage.setItem("favorites", JSON.stringify(favorites));
      return favorites;
    case REMOVE_FROM_FAFORITES:
      favorites = state.filter(favorite => favorite.Key !== action.payload.Key);
      sessionStorage.setItem("favorites", JSON.stringify(favorites));
      return favorites;
    case SET_FAVORITES_WEATHER:
      return action.payload;
    case ADD_FROM_SESSION:
      return action.payload;
    default:
      return state;
  }
};
