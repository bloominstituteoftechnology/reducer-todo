import React, {useReducer}from 'react';
import {todoReducer, initialState} from './reducers/Reducer';

import './App.css';
import  Todoform  from './components/Todoform';
import TodoList from './components/todolist';

function App() {
  const [state,dispatch] = useReducer (todoReducer, initialState);

  const handleAdd = (item) =>{
    const NewObject = {
      item: item,
      completed: false,
      id: Math.random()
    }
    dispatch({ type: 'ADDTODO', payload: NewObject})
  }
  const handleComplete = (id) => {
    dispatch({type: 'COMPLETETODO', payload: id})
  }
  const handleDelete = () => {
    dispatch({type: 'DELETETODO'})
  }
  console.log(state.list)

  return (
    <div className="App">
      <Todoform handleAdd = {handleAdd} />
      <TodoList state = {state.list} handleComplete={handleComplete} />
      <button onClick={handleDelete}>Delete Completed Tasks </button>
    </div>
  );
}

export default App;
