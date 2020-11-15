// import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import React, { Component,  useState, useReducer } from "react";
 

import {

  initTodoState,
  todoReducer,
  TOGGLE_DONE,
  ADD_TODO

} from "./reducers/todoReducer";
/* 
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/

const todolist = [
  {
    task: 'Edit Individual Todos',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Brush Teeth',
    id: 1528817084358,
    completed: false
  }
];


const   App = () =>{

  const [newTodoText, setNewTodoText] = useState();
  const [state, dispatch] = useReducer(todoReducer, initTodoState);

  const handleSubmit = () =>{
    dispatch({
      type: ADD_TODO,
      payload: newTodoText
  })
  }


    return (
      <div className="App">
       
        <TodoForm  handleSubmit={handleSubmit}  initTodoState={initTodoState} todoReducer={todoReducer} 
                  TOGGLE_DONE={TOGGLE_DONE} ADD_TODO={ADD_TODO} />
      </div>
    );
  
}

export default App;
