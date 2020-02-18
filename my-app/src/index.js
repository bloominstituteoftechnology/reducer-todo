import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { formReducer } from "./stateManagement/reducers";
import { createStore } from "redux";
import { provider } from "react-redux";

// Step 1 --- Design Application State

export const initialState = {
  formValues: {
    item: ""
  }
};

// Step 4 --- Use combineReducers from redux to make a single reducer. It takes an object. Keys equate to slices of state.
const combineReducers = combineReducers({
  toDoItem: formReducer
});

const store = createStore(combineReducers);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
