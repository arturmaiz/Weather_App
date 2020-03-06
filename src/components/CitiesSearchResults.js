import React from "react";
import PropTypes from "prop-types";

import CitiesSearchResult from "./CitiesSearchResult";

import { CitiesSearchResultsWrapperStyle } from "../styles/CitiesSearchResultsWrapperStyle";

function CitiesSearchResults({ id, handleSelected, query, cities }) {
  const renderCitiesList = () =>
    cities.map(city => (
      <CitiesSearchResult
        key={city.Key}
        city={city}
        id={id}
        handleSelected={handleSelected}
      />
    ));

  return (
    <CitiesSearchResultsWrapperStyle>
      {query === "" ? null : renderCitiesList()}
    </CitiesSearchResultsWrapperStyle>
  );
}

CitiesSearchResults.propTypes = {
  key: PropTypes.string,
  city: PropTypes.object,
  id: PropTypes.string.isRequired,
  handleSelected: PropTypes.func.isRequired,
};

export default CitiesSearchResults;
