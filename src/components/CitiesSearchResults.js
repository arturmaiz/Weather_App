import React from "react";
import CitiesSearchResult from "./CitiesSearchResult";

import { CitiesSearchResultsWrapperStyle } from "../styles/CitiesSearchResultsWrapperStyle";

function CitiesSearchResults({
  id,
  handleSelected,
  query,
  cities: { cities }
}) {
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

export default CitiesSearchResults;
