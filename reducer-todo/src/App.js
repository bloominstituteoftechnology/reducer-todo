import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { reducer, todo } from "./reducer/reducer";
import Todo from "./components/Todo";

function App() {
  // const [state, dispatch] = useReducer(reducer, todo);
  return (
    <div className="App">
      {/* <TodoForm /> */}
      <TodoList />
      {/* <Todo /> */}
    </div>
  );
}

export default App;