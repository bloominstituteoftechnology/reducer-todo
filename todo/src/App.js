import React, { useState, useReducer } from 'react'
import reducer, { initialState, todos } from './reducers';
import {addTodo, toggleCompleted, clearCompleted} from './actions'
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

const handleToggleCompleted = (id) => {
  dispatch(toggleCompleted(id));
}

const handleClearCompleted = () => {
  dispatch(clearCompleted());
}

console.log(state.todos)
// Good idea to make a test button and hook up your imported actions to make sure they are functioning in your UI components

  return (
    <div className="App">
      <TodoList handleToggleCompleted={handleToggleCompleted} todos={state.todos}  handleClearCompleted={handleClearCompleted}/>
      <TodoForm  handleAddTodo={handleAddTodo}/>
      {/* <button onClick={handleClearCompleted}>Clear completed</button> */}
    </div>

  );
}

export default App;
