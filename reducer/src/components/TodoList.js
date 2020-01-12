import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoList = () => {
  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return <div></div>;
};

export default TodoList;
