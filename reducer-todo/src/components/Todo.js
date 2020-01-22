import React, { useState, useReducer } from "react";

import { todoReducer, initialState } from "./reducers/todoReducer";

export default Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        name="todoText"
        value={newTodo}
        onChange={handleChanges}
      />
      <button>Update Todos</button>
      <div>{this.state}</div>
    </div>
  );
};
