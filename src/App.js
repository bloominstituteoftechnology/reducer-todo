
import React from "react";
import "./App.css";
import TodoList from "./components/ToDoList";


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