import React, { Component, useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("ts: Todo.js: Todo: reducer state: ", state);

  return (
    <div>
      <h1>Todo</h1>
    </div>
  );
};

export default Todo;
