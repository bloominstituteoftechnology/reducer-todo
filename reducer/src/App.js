import React, { useReducer } from 'react';
import './App.css';

// import Todo Components
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

// import initialState and recuder from todoReducer
import { initialState, reducer } from './reducers/todoReducer'

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({ type: "ADD_TODO", payload: newTodo })
  }

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id })
  }

  const clearComplete = () => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
      <button onClick={(e) => {
        e.preventDefault()
        clearComplete()
      }}>Clear Todo</button>
    </div>
  );
}

export default App;
