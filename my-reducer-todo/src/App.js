import React, { useReducer } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'
import { todoReducer, initialState } from './reducers/todoReducer'

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const handleAdd = item => {
    const payload = {
      item: item,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: payload})
  }

  const handleComplete = id => {
    dispatch({type: "TOGGLE_COMPLETE", payload: id})

  }

  const handleRemove = () => {
    dispatch({type: "REMOVE_TODO"})
  }

  return(
    <div className='App'>
      <TodoList state={state.list} handleComplete={handleComplete}/>
      <TodoForm handleAdd={handleAdd}/>
      <button onClick={handleRemove}>Clear Completed Items</button>
    </div>
  )
}