import React, { useReducer } from "react";
import "./App.css";
// Reducer
import { reducer, initialState } from "./Reducers/reducer";

// Components
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = todoName => {
    dispatch({ type: "ADD_TODO", payload: todoName });
  };

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>Welcome to My React To-Do App!</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList {...state} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
