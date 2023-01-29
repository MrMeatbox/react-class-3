import { createStore, combineReducers } from "redux";
/**
 *
 * @param {number} state
 * @param {{type: string, payload: any}} action
 * @returns
 */

export const counterReducer = (state = 900, action) => {
  switch (action.type) {
    case "INCREASE": {
      return state + action.payload;
    }
    case "DECREASE": {
      return state - action.payload;
    }
    case "RESET": {
      return (state = action.payload);
    }

    default: {
      return state;
    }
  }
};

const initState = {
  bgColor: "white",
  textColor: "#000000",
};

export const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_BG_COLOR": {
      return {
        ...state,
        bgColor: action.payload,
      };
    }
    case "CHANGE_TEXT_COLOR": {
      return {
        ...state,
        textColor: action.payload,
      };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
