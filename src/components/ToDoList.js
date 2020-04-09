import React from "react";
import ToDoItem from "./ToDoItem";
import { todoReducer, initialState } from "../reducers/todoReducer";
import ToDoForm from "./ToDoForm";
export default function ToDoList(props) {
  const [toDoState, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <>
      <h2>To-Do List</h2>
      <ToDoForm dispatch={dispatch} />
      <ul>
        {toDoState.map((item) => (
          <ToDoItem key={item.id} {...item} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
}
