import {
    LOADING,
    CURRENT_WEATHER,
    CURRENT_5_DAYS,
  } from "../actions/types";
  
  const initialState = {
    currentWeather: {},
    current5Days: [],
    loading: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
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
      default:
        return state;
    }
  };
  