import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import { initialState, reducer } from "../Reducers/Reducer";

const TodoForm = () => {
  const [state, dispatch] = useReducer(initialState, reducer);
  const [input, setInput] = useState("");

  const handleChanges = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const ClearSubmit = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED", payload: state });
  };

  return (
    <div>
      <form>
        <label htmlFor="todo">New Todo</label>
        <input
          id="todo"
          type="text"
          name="todo"
          value={input}
          onChange={handleChanges}
        />
        <button onClick={handleSubmit}>Add ToDo</button>
        <button onClick={ClearSubmit}>Clear ToDo</button>
      </form>
      <Todo state={state} dispatch={dispatch} />
    </div>
  );
};

export default TodoForm;
