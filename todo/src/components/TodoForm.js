import React from "react";
import reducer, { initialState } from "../reducers";
import TodoList from "./TodoList";

import { useReducer } from "react";
import {
  setNewTodo,
  setNewTodoText,
  setCompleted,
  clearCompleted,
} from "../actions/index";

const TodoForm = () => {
  const initialFormValue = "";

  console.log("todoForm");

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      item: state.newTodoText,
      completed: false,
      id: new Date(),
    };

    dispatch(setNewTodo(newTodo));
    dispatch(setNewTodoText(initialFormValue));
  };

  const onChange = (e) => {
    dispatch(setNewTodoText(e.target.value));
  };

  const handleCompleted = (id) => {
    dispatch(setCompleted(id));
    // console.log("completed!");
    // console.log(id);
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearCompleted());
  };

  // console.log(state.newTodoText);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Todo
        <input
          type="text"
          name="title"
          value={state.newTodoText}
          placeholder="Add todo"
          onChange={onChange}
        />
        <button
        // onClick={dispatch(setNewTodo(state.newTodoText))}
        >
          Submit!
        </button>
      </form>
      <button onClick={handleClear}>Clear Completed</button>
      <TodoList
        state={state}
        dispatch={dispatch}
        handleCompleted={handleCompleted}
      />
    </div>
  );
};

export default TodoForm;
