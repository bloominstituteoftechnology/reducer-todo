import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import { listReducer, initialState } from "./reducers/listReducer";
import TodoForm from "./components/todoForm";
import Todo from "./components/todo";
import './App.css';



function App() {
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
