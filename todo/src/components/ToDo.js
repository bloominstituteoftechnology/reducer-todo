import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer.js";

const ToDo = () => {
  const [toDo, setToDo] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const handleChanges = (e) => {
    setToDo((state.item = e.target.value));
  };

  return (
    <div>
      <input
        className="todo-input"
        type="text"
        name="item"
        value={state.item}
        onChange={handleChanges}
      />
      <button onClick={() => dispatch({ type: "ADD_TODO", payload: item })}>
        Add Task
      </button>
    </div>
  );
};

export default ToDo;
