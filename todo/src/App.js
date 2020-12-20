import React, { useState, useReducer } from 'react';
import Todo from './components/Todo';
import { reducer, initialState, ACTIONS } from './reducers/reducer';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }
  
  return (
    <>
    <h1>My Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
      <button className="clear-btn" onClick={() => dispatch({ type: ACTIONS.DELETE_TODO})}>Clear Completed</button>
    </>
  );
}

export default App;
