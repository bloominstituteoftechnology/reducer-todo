import React, { useReducer, useState } from "react";

import { initialState, ListReducer } from "../reducers/Reducers";

const ListItems = () => {
  const [todos, setTodos] = useState(initialState.todos);

  return (
    <div className="todoItems">
      {todos.map(todo => {
        return <p>{todo.item}</p>;
      })}
    </div>
  );
};

export default ListItems;
