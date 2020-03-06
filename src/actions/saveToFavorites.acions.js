import {
  SAVE_TO_FAVORITES,
  REMOVE_FROM_FAFORITES,
  ADD_FROM_SESSION
} from "./types";

export const saveToFavorites = city => dispatch => {
  dispatch({
    type: SAVE_TO_FAVORITES,
    payload: city
  });
};

export const removeFromFavorites = city => dispatch => {
  dispatch({
    type: REMOVE_FROM_FAFORITES,
    payload: city
  });
};

export const addFromSession = city => dispatch => {
  dispatch({
    type: ADD_FROM_SESSION,
    payload: city
  });
};
