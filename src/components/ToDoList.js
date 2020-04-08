import React from "react";
import ToDoItem from "./ToDoItem";
import { todoReducer, initialState } from "../reducers/todoReducer";
export default function ToDoList(props) {
  const [toDoState, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <ul>
      {toDoState.map((item) => (
        <ToDoItem {...item} />
      ))}
    </ul>
  );
}
