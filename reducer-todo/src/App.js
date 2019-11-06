import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "./components/todoForm";
import Todo from "./components/todo";
import './App.css';
import { ADD } from "./actions/actions";


function App() {

  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}
export default App;
