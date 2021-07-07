import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { formReducer } from "./stateManagement/reducers";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";


// Step 1 --- Design Application State

export const initialState = {
  formValues: {
    item: ""
  }
};

// Step 4 --- Use combineReducers from redux to make a single reducer. It takes an object. Keys equate to slices of state.
const combinedReducers = combineReducers({
  toDoItem: formReducer
});



// Step 5 --- Use createStore from redux to make a store 
const store = createStore(combinedReducers);


ReactDOM.render(
    // Step 6 --- Wrap the application with a provider from react-redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
