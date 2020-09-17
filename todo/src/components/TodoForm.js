import React, { useState, useReducer } from "react";
import {
  initialState,
  todoReducer,
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
} from "../reducers/todoReducer";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  // console.log("ts: Todo.js: Todo: reducer state: ", todos);

  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="todos">
      <form onSubmit={onSubmit}>
        <h1>Tasks</h1>
        <input
          className="todo-input"
          type="text"
          name="todo"
          value={todo}
          onChange={onChange}
        />
        <button
          onClick={() => {
            dispatch({ type: ADD_TODO, payload: todo });
          }}
        >
          Add a Task
        </button>
        <button
          onClick={() => {
            dispatch({ type: CLEAR_COMPLETED, payload: todo });
          }}
        >
          Clear Completed Tasks
        </button>
      </form>
      <hr />
      <div className="tasks">
        {todos.map((todo) => {
          return (
            <p
              key={todo.id}
              onClick={() => {
                dispatch({ type: TOGGLE_TODO, payload: todo });
              }}
              style={{ color: todo.completed ? "#9EA9B8" : "#7C5265" }}
            >
              {todo.item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TodoForm;
