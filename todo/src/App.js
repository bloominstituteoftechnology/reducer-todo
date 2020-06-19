import React, { useReducer } from 'react';
import ToDo from "./components/ToDo"
import ToDoForm from "./components/ToDoForm"
import logo from './logo.svg';
import './App.css';
import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <h2>Welcome to your ToDo App</h2>
      <ToDo/>
      <ToDoForm/>
    </div>
  );
}

export default App;
