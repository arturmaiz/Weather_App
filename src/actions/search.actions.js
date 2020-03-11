import axios from "axios";
import {
  FETCH_CITIES,
  LOADING,
  CURRENT_WEATHER,
  CURRENT_5_DAYS,
  SET_CURRENT_CITY,
  SET_FAVORITES_WEATHER
} from "./types";

const API_KEY = "8c2haGvWfj4nL2srubbaJm1nGkCOxrAi";
const BASE_URL = "https://dataservice.accuweather.com/";

export const setLoading = isLoading => {
  return {
    type: LOADING,
    payload: isLoading
  };
};

export const fetchCities = city => async dispatch => {
  try {
    dispatch(setLoading(true));

    setTimeout(async () => {
      const response = await axios.get(
        `${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`
      );

      dispatch({
        type: FETCH_CITIES,
        payload: response.data
      });

      dispatch(setLoading(false));
    }, 500);
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentWeather = id => async dispatch => {
  try {
    const getCurrentWeather = await axios.get(
      `${BASE_URL}currentconditions/v1/${id}?apikey=${API_KEY}`
    );

    const get5Days = await axios.get(
      `${BASE_URL}forecasts/v1/daily/5day/${id}?apikey=${API_KEY}`
    );

    dispatch(setLoading(true));

    dispatch({
      type: CURRENT_WEATHER,
      payload: getCurrentWeather.data
    });

    dispatch({
      type: CURRENT_5_DAYS,
      payload: get5Days.data.DailyForecasts
    });

    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const setCurrentCity = city => dispatch => {
  try {
    const setCurrentCityResponse = city;

    dispatch({
      type: SET_CURRENT_CITY,
      payload: setCurrentCityResponse
    });
  } catch (err) {
    console.log(err);
  }
};

export const getFavoritesWeather = favorites => async dispatch => {
  try {
    dispatch(setLoading(true));
    const promisses = favorites.map(favorite =>
      axios.get(
        `${BASE_URL}currentconditions/v1/${favorite.Key}?apikey=${API_KEY}`
      )
    );

    const response = (await Promise.all(promisses)).map(
      response => response.data[0]
    );

    const payload = response.map((weather, index) => ({
      ...weather,
      ...favorites[index]
    }));

    dispatch(setLoading(false));

    dispatch({
      type: SET_FAVORITES_WEATHER,
      payload
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchByGeoLocation = geoLocation => async dispatch => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(
      `${BASE_URL}locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${geoLocation &&
        geoLocation.latitude},${geoLocation && geoLocation.longitude}`
    );

    dispatch(setCurrentCity(response.data));

    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};
