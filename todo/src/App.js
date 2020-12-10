import React, {useReducer, useState}from 'react'
import reducer, {initialState} from './reducers/todoReducer'
import {setAddTask, setClearTask}from './actions/action'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const clearTask = (e) =>{
    e.preventDefault()
    dispatch(setClearTask())
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
     <TodoForm  state = {state} dispatch = {dispatch}/>
     <TodoList state = {state} dispatch = {dispatch}/>
     <button onClick = {clearTask}>Clear</button>
    </div>
  );
}

export default App;
