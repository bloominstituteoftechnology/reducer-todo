import React, { useReducer } from "react";

import { reducer, todo } from "../reducers/reducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = props => {
  const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      <br />
      {state.map(todo => {
        return (
          <div>
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
