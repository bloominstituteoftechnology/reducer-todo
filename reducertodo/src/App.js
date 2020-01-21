import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TaskList} from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div className="App">
     <TaskList/>
     <TaskForm/>
    </div>
  );
}

export default App;
