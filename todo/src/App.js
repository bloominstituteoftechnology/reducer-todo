import React, { useState, useReducer } from 'react';
import Todo from './Todo.js';
import { reducer } from "../reducers/reducer";


export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const[name, setName] = useState('');

  function handleSubmit() {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }


console.log(todos)

return(
  <>
  <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={e => setName
    (e.target.value)} />
  </form>
  {todos.map(todo => {
    <Todo key={todo.id} todo={todo} dispatch= {dispatch} />
  })}
  </>
)
}
