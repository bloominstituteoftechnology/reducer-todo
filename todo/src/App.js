import React, { useReducer } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import { reducerTodos, initialState } from "./reducers/reducerTodos";

function App() {
  const [state, dispatch] = useReducer(reducerTodos, initialState);
  console.log('initialState', state)

  return (
    <div className="App">
      <header>
        <h1>Lisa's Very Important Tasks!</h1>
      </header>
      <TodoList tasks={state.tasks} />
    </div>
  );
}

export default App;
