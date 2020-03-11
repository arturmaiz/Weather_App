import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import cities from "./cities.reducers";
import favorites from "./favorites.reducers.js";
import weather from "./weather.reducers.js";
import toggleTemperature from "./toggleTemperature.reducers";

export default combineReducers({
  cities,
  weather,
  favorites,
  toggleTemperature,
  form: FormReducer
});
