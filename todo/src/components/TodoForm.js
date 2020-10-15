import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducers/Reducer"
import TodoList from "./TodoList"

export default function TodoForm(props) {
  console.log("form", props);

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState("");

  console.log("state", state);

  const handleChanges = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: todoText });
    setTodoText("");
  };

  const toggleTodo = (todoId) => {
    console.log("todo id", todoId);
    dispatch({ type: "TOGGLE_ITEM", payload: todoId });
  };

  const cleared = (event) => {
    event.preventDefault();
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="toDo"
          value={todoText}
          onChange={handleChanges}
        />
        <button>Add Somthing To Do</button>
      </form>
      <TodoList todo={state.todoItems} toggle={toggleTodo} clear={cleared} />
    </div>
  );
}