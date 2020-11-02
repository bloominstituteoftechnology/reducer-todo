import React, { useState, useReducer } from 'react'
import TodoItem from './TodoItem'
import { initialState, reducer } from '../reducers/index'

function TodoItems() {
  const [newTodo, setNewTodo] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)
  function handleAdd(e) {
    setNewTodo(e.target.value)
  }
  function onSubmit(e) {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    })
    setNewTodo("")
  }
  
  function changeCompleted(e) {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: e.target.id
    })
  }

  function clearCompleted() {
    dispatch({
      type: 'CLEAR_COMPLETED',
    })
  }

  return (
    <div>
      <h1>Todo List</h1>
      {state.todo.map(item => <TodoItem key={item.id} todo={item} changeCompleted={changeCompleted}/>)}
      <div><button onClick={clearCompleted}>Clear Completed</button></div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="New Todo Item" value={newTodo} onChange={handleAdd}/>
        <button>Add Item</button>
      </form>
    </div>
  )
}

export default TodoItems