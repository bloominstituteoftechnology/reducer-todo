import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import { initialState, reducer } from "./reducers/reducer.js";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   toDos = setToDos(...toDos, )
  // });
  //console.log()

  return (
    <div className="App">
      <h1> ToDos using Reducers </h1>
      <div className="todo-list">
        <ol>
          {toDos.map((toDo) => (
            <li>
              <ToDo key={toDo.id} item={toDo.item} />{" "}
            </li>
          ))}
          {/* <li>{state.item}</li> */}
        </ol>
      </div>
    </div>
  );
};

export default App;
