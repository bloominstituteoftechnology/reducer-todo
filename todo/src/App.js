import React, { useState, useReducer } from 'react';
import './App.css'
import reducer from './reducers';


import { setNewTodo, setCompleted, setCurrentText, setClear } from './actions/index';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import image1 from './images/pir1.png';
import image2 from './images/pir2.png';


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
      <div className='image1'>
      <img src={image1} alt="smiley face pirate with an eyepatch" />;
      </div>
      <div>
      <TodoForm handleAddItem={handleAddItem} state={state} handleChanges={handleChanges} handleClearTasks={handleClearTasks}/>
      <TodoList todoList={state.list} handleToggleItem={handleToggleItem}/>
      </div>
      <div className='image2'>
      <img src={image2} alt="red pirate wax seal flourish" />;
      </div>
    </div>

)}

export default App;
