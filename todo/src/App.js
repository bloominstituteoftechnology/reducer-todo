import React, {useReducer, useState} from 'react';
import TodoList from './components/TodoList';
import {
  reducer,
  initialState
} from './reducers/todoReducer'
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state',state)

  const handleChanges = e => {
    console.log('the handle changes',e.target.value)
    setNewTodo(e.target.value)
  }
  console.log(newTodo)

  const toggleItem = itemId => {
    console.log('itemId:', itemId);
    dispatch({type: 'toggle', payload: itemId})
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({type: 'completed'})
  }


  return (
    <div style = {{textAlign: 'center'}}>
      <h2>Welcome to your Todo App !</h2>
      <div className='form'>
          <div>
            <input 
            className='input'
            type='text'
            name = 'newTodo'
            value = { newTodo }
            onChange = { handleChanges }
            placeholder = 'Add a Task...'
            />
            <button onClick={() => {
              dispatch({type: 'new_todo', payload: newTodo})
            }}> ADD </button>
          </div>
      </div>
      <TodoList 
        list = { state } 
        toggleItem = { toggleItem }
        clearCompleted = { clearCompleted }
      />
    </div>
  );
}

export default App;