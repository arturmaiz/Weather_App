import { FETCH_CITIES, LOADING, SET_CURRENT_CITY } from "../actions/types";

const initialState = {
  cities: [],
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
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    default:
      return state;
  }
};
