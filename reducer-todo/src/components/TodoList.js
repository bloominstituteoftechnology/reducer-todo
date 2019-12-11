import React, { useReducer } from "react";
import { initialTodo, Reducer } from "../reducers/Reducer";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  console.log(initialTodo);
  const [state, dispatch] = useReducer(Reducer, initialTodo);

  const deleteTodos = e => {
    e.preventDefault();
    dispatch({ type: "DELETE" });
  };

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      <div>
        {state.map(todo => (
          <Todo key={todo.id} dispatch={dispatch} todo={todo} />
        ))}
      </div>
      <button onClick={deleteTodos}>Clear Completed Todos</button>
    </div>
  );
};

export default TodoList;
