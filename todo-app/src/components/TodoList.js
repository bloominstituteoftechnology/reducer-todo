import React from "react";

// import { Reducer, initialState } from "../reducers/reducer";

import TodoItem from "./TodoItem";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};

export default TodoList;
