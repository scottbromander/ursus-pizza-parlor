import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const typeReducer = (state = "", action) => {
  if (action.type === "SET_ORDER_TYPE") {
    return action.payload;
  }

  return state;
};

const pizzaReducer = (state = [], action) => {
  if (action.type === "SET_PIZZA_ORDER") {
    return [...action.payload];
  }

  return state;
};

const customerReducer = (state = {}, action) => {
  if (action.type === "SET_CUSTOMER_INFO") {
    return { ...action.payload };
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    typeReducer,
    pizzaReducer,
    customerReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
