import React, { useReducer, useState } from 'react';
import { todoReducer, list } from './reducers/reducer'
import TodoForm  from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';



function App() {
  const [ state, dispatch ] = useReducer( todoReducer, list )
  const [ value, setValues ] = useState('')
  console.log(state)
  
  return (
    <div className="App">
      <div className="form">
        <h1>Your To-Do List</h1>
      <TodoForm value={value} setValues={setValues} dispatch={dispatch}/>
      </div>
      <div className ="list">
        <TodoList props={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
