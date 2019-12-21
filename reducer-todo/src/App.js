import React, { useReducer } from 'react';
import { todos, reducer } from './reducers/Reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useInput } from './components/useInput';


function App() {
  const [todoList, dispatch] = useReducer(reducer, todos);
  const [todoInput, setTodoInput, handleTodoInput] = useInput('');

  const handleSubmit = (e) => {
    const value = e.target.todoInput.value;
    dispatch({type: 'add', payload: value});
    setTodoInput('');
    e.preventDefault();
  };
  

  return (
    <div className='container'>
      <h1 className="title">ToDo List</h1>
      <TodoForm todoInput={todoInput} handleTodoInput={handleTodoInput} handleSubmit={handleSubmit} dispatch={dispatch}/>
      <TodoList todoList={todoList} dispatch={dispatch}/>
    </div>
  )
}

export default App;
