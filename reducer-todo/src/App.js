import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {initialState, toDoReducer} from './reducers/index';
import TodoList from './components/todolist';

function App() {



  return (
    <div className="App">
      <div className="todo-list">
        <TodoList />
        
      </div>
    </div>
  );
}

export default App;
