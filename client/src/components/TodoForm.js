import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

export const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todo, addTodo] = useState();

  const handleChange = e => {
    addTodo([e.target.value]);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={todo} name="todoText" onChange={handleChange} />
      {state.item}
      <button
        onSubmit={handleSubmit}
        onClick={() => {
          dispatch({ type: "SET_TODO", payload: todo });
          // addTodo("");
          console.log(todo);
          console.log(initialState);
        }}
      >
        Add Todo
      </button>
      <button
      // onClick={() => {
      >
        Clear Completed
      </button>
      {!state.completed ? (
        <div
          onClick={() => {
            dispatch({ type: "SET_COMPLETED" });
            console.log(state);
          }}
          style={{ cursor: "pointer" }}
        >
          {state.item}
        </div>
      ) : (
        <div
          onClick={() => {
            dispatch({ type: "SET_COMPLETED" });
            console.log(state);
          }}
          style={{ textDecoration: "line-through", cursor: "pointer" }}
        >
          {state.item}
        </div>
      )}
    </div>
  );
};
