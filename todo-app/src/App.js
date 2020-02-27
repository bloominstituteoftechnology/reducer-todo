import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

import { initialState, todoReducer } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>todoList</h1>
      <TodoList todos={state.todos} />
    </div>
  );
}

export default App;
