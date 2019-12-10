import React, {useReducer} from 'react';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import {state, reducer} from './reducers/todoReducers';
import './App.css';

function App() {
  const [{item, completed, id}, dispatach] = useReducer(reducer, state)
  console.log('state responce', state)
  
  return (
    <div className="App">
      <h1>Welcome to your Todo List</h1>
      
      <Todo state={state}/>
      <TodoForm />
    </div>
  );
}

export default App;
