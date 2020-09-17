import React, { useReducer } from "react";
import "./App.css";
import Reducer from "./reducers/reducer";
import initialState from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
