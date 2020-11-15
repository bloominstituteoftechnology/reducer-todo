// import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import React, { Component } from "react";
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


class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      todolist
    };
  }
  render() {
    return (
      <div className="App">
       
        <TodoForm />
      </div>
    );
  }
}

export default App;
