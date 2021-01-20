import React, { useState, useReducer } from 'react'
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
  // const [inputValue, setinputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

// const onChange = (e) => {
//   setinputValue(e.target.value)
// }

const handleAddTodo = (title)=> {
  dispatch(addTodo(title))
}

console.log(state.todos)

  return (
    <div className="App">
      <TodoList todos={state.todos} />
      <TodoForm  handleAddTodo={handleAddTodo}/>
    </div>

  );
}

export default App;
