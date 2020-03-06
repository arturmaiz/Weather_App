import { combineReducers } from "redux";
import cities from "./cities.reducers";
import favorites from "./favorites.reducers.js";

export default combineReducers({
  results: cities,
  favorites
});
