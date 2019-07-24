import React, { useReducer } from 'react';

import {
  reducer,
  initialState, 
  ADD_TASK,
} from './reducers/reducer';

import Todos from './components/Todos';
import Form from './components/Form';

import './App.css';

const App = () => {
  const [state] =useReducer(reducer, initialState);
  
  const addTask = (event, task) => {
    event.preventDefault();
    dispatchEvent({ type: ADD_TASK, payload: task })
  }

  return (
    <div className="App">
      <h1>Todo List! 📑</h1>
      <Form addTask={addTask}/>
      <Todos todos={state.todoList}/>
    </div>
  );
}

export default App;
