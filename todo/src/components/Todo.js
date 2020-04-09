import React, { useReducer, useState } from "react";
import { initialTodo, todoReducer } from "../reducers/todoReducer";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodo);
  const [newTodo, setNewToDo] = useState("");

  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleCompleted = (itemID) => {
    dispatch({ type: "TODO_CLICKED", payload: itemID });
  };

  const handleClearList = (e) => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  // console.log("Todo.js  initialTOdo -->",initialTodo)
  //   console.log("Todo.js  todoReducer -->",todoReducer)
  // console.log("Todo.js  newTodo -->",newTodo)
  //  console.log("Todo.js  dispatch -->",dispatch)
  //   console.log("Todo.js  toDoState -->",todoState)
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="inputToDo">
          Enter a To Do
          <input
            id="inputTodo"
            name="inputSec"
            type="text"
            placeholder="Enter here..."
            value={newTodo}
            onChange={handleChange}
          />
        </label>
        <br />
        <button
          onClick={() => {
            dispatch({ type: "ADDED_TODO", payload: newTodo });
            setNewToDo("");
          }}
        >
          Add
        </button>
        <br />
        <button name="clearBTN" onClick={handleClearList}>
          Clear
        </button>
      </form>
      <br />
      <TodoList handleCompleted={handleCompleted} todoState={todoState} />
    </>
  );
};

export default Todo;
