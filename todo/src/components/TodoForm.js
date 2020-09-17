import React, { useState, useReducer } from "react";
import {
  initialState,
  todoReducer,
  ADD_TODO,
  TOGGLE_TODO,
} from "../reducers/todoReducer";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  console.log("ts: Todo.js: Todo: reducer state: ", todos);

  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  // const onClick = (e) => {

  // }
  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
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
      </form>
      <hr />
      <div>
        {todos.map((todo) => {
          return (
            <p
              key={todo.id}
              onClick={() => {
                dispatch({ type: TOGGLE_TODO, payload: todo });
              }}
              style={{ color: todo.completed ? "#AAA" : "#000" }}
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
