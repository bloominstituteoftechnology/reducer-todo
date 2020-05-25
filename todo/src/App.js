import React from 'react';
// import { initialState, TodoReducer } from "./reducers/reducer";
import './App.css';

import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
