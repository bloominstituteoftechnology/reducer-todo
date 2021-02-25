import "./App.css";
import React, { useState, useReducer } from "react";
import todoReducer from "./reducers/todoReducer";

function App() {

  const initialState = { title: "Reducer", editing: false };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
