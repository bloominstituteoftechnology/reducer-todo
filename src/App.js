import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


function App() {


  return (
    <div className="App">
    <h2>To Do App</h2>
    
     <TodoForm /> 
     <TodoList />
      
    </div>
  );
}

export default App;
