import React, { useReducer, useState } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/reducers'
import AppList from "./components/AppList"
import AppForm from "./components/AppForm"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [inputTodo, setInputTodo] = useState("")
  
  const handleToggleCompleted = (task) => {
    dispatch({ 
      type: "TOGGLE_COMPLETE", 
      payload: task.id 
    })
  }

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <AppList
        toDoItems = {state.items}
        toggleCompleted = {handleToggleCompleted}
      />
      <AppForm 
        submitTodo = {(e) =>{ 
          e.preventDefault()
          dispatch({ type: "SUBMIT_TODO", payload: inputTodo })
          setInputTodo("")
        }}
        handleChange = {(e) => {setInputTodo(e.target.value)}}
        inputTodo = {inputTodo}
      />
      <button onClick={ (e) => {
        e.preventDefault()
        dispatch({type:"CLEAR_COMPLETE"})
      }}>Clear Completed</button>
    </div>
  );
  
}

export default App