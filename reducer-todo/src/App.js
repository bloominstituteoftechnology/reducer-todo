import React, {useState, useReducer} from 'react';
import TodoList from './components/TodoList';

import {initialState, todoReducer} from './reducers/todoReducer';
function App() {
const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">

      <header className="App-header">
        <p>
          Welcome to My ToDo List
        </p>
      </header>
      <div>
      <TodoList state={state} dispatch={dispatch} />
      </div>

    </div>
  );
}

export default App;
