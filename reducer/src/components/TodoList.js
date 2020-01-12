import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoList = () => {
  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  const addTodo = e => {
    e.preventDefault();
    let ToDo = { item: input, completed: false, ID: Date.now() };
    dispatch({ type: "ADD_TODO", payload: ToDo });
    setInput("");
  };

  const handleChanges = e => {
    setInput(e.target.value);
  };

  return (
    <div>
      {state.todos.map(todo => {
        return <p>{todo.item}</p>;
      })}
      <form onSubmit={addTodo}>
        <input type="text" value={input} onChange={handleChanges} />
        <button>Add ToDo</button>
      </form>
    </div>
  );
};

export default TodoList;
