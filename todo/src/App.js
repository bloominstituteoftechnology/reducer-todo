import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* - Now render your list of todos from your reducer in your app */}
      <TodoList />
    </div>
  );
}

export default App;
