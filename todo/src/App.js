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
      <TodoForm value={value} setValues={setValues} dispatch={dispatch}/>
      </div>
      <div className ="list">
        <TodoList props={list}/>
      </div>
    </div>
  );
}

export default App;
