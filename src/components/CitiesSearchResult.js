import React from "react";

import { CitiesSearchResultsItemStyle } from "../styles/CitiesSearchResultsItemStyle";

function CitiesSearchResult({ city, handleSelected }) {
  return (
    <CitiesSearchResultsItemStyle
      onClick={() => {
        handleSelected(city);
      }}
    >
      {city.LocalizedName}
    </CitiesSearchResultsItemStyle>
  );
}

export default CitiesSearchResult;
