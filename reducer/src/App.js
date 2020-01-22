import React, { useReducer } from 'react';
import './App.css';
import {initialState, TodoReducer} from './reducers/reducer';
import ToDo from './components/ToDo';
import ToDoList from './components/ToDoList';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <div className="App">
      <h1>Wedding Task Planner</h1>
      <p>Make the most of your time.</p>
      <ToDo state={state} dispatch={dispatch}/>
      <ToDoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
