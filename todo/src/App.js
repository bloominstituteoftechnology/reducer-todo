import React, { useState } from 'react'
import reducer, { initialState, todos } from './reducers';
import {addTodo} from './actions'
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// console.log(todoList);
// let currentList = reducer(todoList, addTodo({
//   task: 'clean dishes',
//   completed: false
// }))
// console.log(currentList)
// currentList = reducer(todoList, addTodo({
//   task: 'wash car',
//   completed: false
// }))
// console.log(currentList);

function App() {
  const [inputValue, setinputValue] = useState('');
  const [state, dispatch] = reducer(reducer, initialState)
const onChange = (e) => {
  setinputValue(e.target.value)
}

const handleClick = ()=> {
  dispatch({type:"ADD_TODO", payload: 'new todo'})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  handle
}

  return (
    <div className="App">
      ToDo List
      <input 
      type='text'
      placeholder='toDo'
      name='todoForm'
      onChange={onChange}
      value={inputValue}
      />
      <button onClick={handleClick}></button>
    </div>

  );
}

export default App;
