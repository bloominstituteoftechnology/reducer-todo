import React, {useState, useReducer} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {initialTodos, toDoReducer} from "./reducers/todoReducer";


const App = (props) => {
  const [todos, dispatch] = useReducer(toDoReducer, initialTodos);
  const [newTask, setNewTask] = useState("");

  const handleAddTodos = e => {
    dispatch({ type: "ADD_TASK", payload: newTask });
    e.preventDefault();
  };
  return(
    <div className="App">
      <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddTodos={handleAddTodos} />
      </div>
      <TodoList />
    </div>
  )
}

export default App;