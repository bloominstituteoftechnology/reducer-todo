import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import ToDoForm from './components/todoForm';
import ToDoList from './components/todoList';
import './App.css';

function App() {

  const [state, dispatch] = useReducer (reducer, initialState);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm dispatch={dispatch}/>
      <ToDoList state={state} dispatch={dispatch}/>
      
    </div>
  );
}

export default App;
