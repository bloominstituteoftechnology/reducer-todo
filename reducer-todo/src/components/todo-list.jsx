import React from "react";
import Todo from "./todo";

const TodoList = props => {
  console.log("this is TodoList", props.state);
  return (
    <div>
      {props.state.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
      ))}
    </div>
  );
};
export default TodoList;
