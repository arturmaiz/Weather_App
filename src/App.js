import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Routes } from "./routes";
import { ADD_FROM_SESSION } from "./actions/types";
import { fetchByGeoLocation } from "./actions/search.actions";

import Footer from "./components/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

export let geo;

if (sessionStorage.favorites) {
  store.dispatch({
    type: ADD_FROM_SESSION,
    payload: JSON.parse(sessionStorage.favorites)
  });
}

function success(pos) {
  geo = pos.coords;
  store.dispatch(fetchByGeoLocation(geo));
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, options);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ mode: "" }}>
        <GlobalStyles />
        <Routes />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
