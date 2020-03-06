import {
  FETCH_CITIES,
  LOADING,
  CURRENT_WEATHER,
  CURRENT_5_DAYS,
  SET_CURRENT_CITY
} from "../actions/types";

const initialState = {
  cities: [],
  currentWeather: {},
  current5Days: {},
  currentCity: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        cities: action.payload,
        loading: false
      };
    case LOADING:
      return { ...state, loading: action.payload };
    case CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload[0],
        loading: false
      };
    case CURRENT_5_DAYS:
      return {
        ...state,
        current5Days: action.payload,
        loading: false
      };
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    default:
      return state;
  }
};
