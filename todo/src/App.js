import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Todo} from './components/todoComponent';
import TodoForm from './components/todoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <TodoForm/> */}
      <Todo/>
      
      </header>
    </div>
  );
}

export default App;
