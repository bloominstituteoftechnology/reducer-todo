import logo from './logo.svg';
import './App.css'; 
import reducer, { todo } from './reducers/index';
import { addTodo, toggleTodo } from './actions/index';
import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, todo);

  const handleAddTodo = newTodo =>{
    dispatch(addTodo(newTodo.target.value))
  }

  return (
    <div className="App">
      <TodoForm handleAddTodo={handleAddTodo}  />
      <TodoList state ={state} toggleTodo={toggleTodo} />
    </div>
  );
}
export default App;
