import React, { useReducer } from "react";

import { reducer, todo } from "./reducers/Reducer";
import Todo from "./ToDo";
import TodoForm from "./ToDoForm";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList; 