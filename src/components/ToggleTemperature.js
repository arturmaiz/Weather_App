import React from "react";
import { connect } from "react-redux";
import { toggleTemperature } from "../actions/toggleTemperature.actions";

import { ToggleTemperatureStyle } from "../styles/ToggleTemperatureStyle";

function ToggleTemperature(props) {
  return (
    <ToggleTemperatureStyle
      onClick={() =>
        props.toggleTemperature(props.temperature === false ? true : false)
      }
      className={`fas fa-toggle-${props.temperature === false ? "off" : "on"}`}
    >
      {props.temperature === false ? "ºF" : "ºC"}
    </ToggleTemperatureStyle>
  );
}

const mapStateToProps = state => {
  return {
    temperature: state.toggleTemperature.value
  };
};

export default connect(mapStateToProps, { toggleTemperature })(
  ToggleTemperature
);
