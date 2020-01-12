import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoList = () => {
  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

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
