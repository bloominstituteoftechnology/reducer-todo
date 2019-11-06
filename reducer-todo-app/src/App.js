import React, { useReducer } from 'react';
import './App.css';
// Reducer
import { reducer, initialState } from "./Reducers/reducer";

// Components
import TodoForm from "./Components/TodoForm";



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = todoName => {
    dispatch({ type: "ADD_TODO", payload: todoName })
  }

  const clearCompleted = id => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }
  return (
    <div className="App">
      <h1>Welcome to My React To-Do App!</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
