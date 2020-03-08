import { TOGGLE_TEMPERATURE } from "../actions/types";

const initialState = {
  value: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TEMPERATURE:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
