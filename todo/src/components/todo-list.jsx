import React, { useReducer } from "react";
import { reducer, todo } from "../reducers/todoReducer";
import TodoForm from "./todo-form";
import Todo from "./todo";

const TodoList = reducer  => {
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
 )};
  
  export default TodoList;