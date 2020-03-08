import { TOGGLE_TEMPERATURE } from "./types";

export const toggleTemperature = value => {
  return {
    type: TOGGLE_TEMPERATURE,
    value
  };
};