import React from "react";
import ToDoItem from "./ToDoItem";
import { todoReducer, initialState } from "../reducers/todoReducer";
import ToDoForm from "./ToDoForm";
export default function ToDoList(props) {
  const [toDoState, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <>
      <h2>
        {"To-Do List "}
        <button onClick={() => dispatch({ name: "CLEAR_COMPLETED" })}>
          Clear completed
        </button>
      </h2>
      <ToDoForm dispatch={dispatch} />
      <ul className="to-do-list">
        {toDoState.map((item) => (
          <ToDoItem key={item.id} {...item} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
}
