import React, { useState, useReducer } from 'react';
import './App.css'
import reducer from './reducers';


import { setNewTodo, setCompleted, setCurrentText, setClear } from './actions/index';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

  const testArray = [{
    item: 'Dance',
    completed: false,
    id: 3892987589
  },
  {
    item: 'write',
    completed: false,
    id: 3892987590
  },
  {
    item: 'study math',
    completed: false,
    id: 3892987591
  }]

  const initialState = {
    list: testArray,
    currentText: ''
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggleItem = (id) => {
    dispatch(setCompleted(id))
  }

  const handleAddItem = (task) => {
    dispatch(setNewTodo(task));
  }

  const handleChanges = (e) => {
    dispatch(setCurrentText(e.target.value))
  }

  const handleClearTasks = () => {
    dispatch(setClear());
  }

  return(
    <div className='App'>
      <TodoForm handleAddItem={handleAddItem} state={state} handleChanges={handleChanges} handleClearTasks={handleClearTasks}/>
      <TodoList todoList={state.list} handleToggleItem={handleToggleItem}/>
    </div>

)}

export default App;
