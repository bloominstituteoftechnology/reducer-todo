import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

export const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });
  const [todo, addTodo] = useState();

  const handleChange = e => {
    addTodo(e.target.value);
  };

  return (
    <div>
      <form>
        <h1>Todo List</h1>
        <input
          type="text"
          value={todo}
          name="todoText"
          onChange={handleChange}
        />
        <button
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "ADD_TODO", todo });
            console.log(state.todos, todo);
            addTodo("");
          }}
        >
          Add Todo
        </button>
        <button
          onClick={(e, idx) => {
            e.preventDefault();
            dispatch({ type: "CLEAR_TODO", idx });
          }}
        >
          Clear Completed
        </button>
        {state.todos.map((t, idx) => (
          <div
            key={t.todo}
            onClick={() => {
              dispatch({ type: "TOGGLE_COMPLETED", idx });
            }}
            style={{ textDecoration: t.completed ? "line-through" : "" }}
          >
            {t.todo}
          </div>
        ))}
        {/* {state.todos.map(t, idx => (
          <div
            onClick={() => {
              dispatch({ type: "TOGGLE_COMPLETED", idx });
            }}
            style={{ textDecoration: t.completed ? "line-through" : "" }}
            key={t.todo}
          >
            {t.todo}
          </div>
        ))} */}
        {/* 
        {!state.completed ? (
          <div
            onClick={() => {
              dispatch({ type: "SET_COMPLETED" });
            }}
          >
            {state.todos.map(t => (
              <div style={{ cursor: "pointer" }} key={t.todo}>
                {t.todo}
              </div>
            ))}
          </div>
        ) : (
          <div
            onClick={() => {
              dispatch({ type: "SET_COMPLETED" });
            }}
          >
            {state.todos.map(t => (
              <div
                style={{ textDecoration: "line-through", cursor: "pointer" }}
                key={t.todo}
              >
                {t.todo}
              </div>
            ))}
          </div>
        )} */}
      </form>
    </div>
  );
};
