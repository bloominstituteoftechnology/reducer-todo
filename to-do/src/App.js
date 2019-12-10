import React, {useReducer} from 'react';
import TodoList from './Components/TodoList';
import TodoForm  from './Components/TodoForm';
import Todo from './Components/Todo';
import './App.css';


function App() {
  
  
  return (
    <div className="App">
      <h1>Welcome to your Todo List</h1>
      <TodoForm />
     
     
    </div>
  );
}

export default App;
