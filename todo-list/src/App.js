import React, { useReducer } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const addTodo = (event) => {
    event.preventDefault();
    dispatch({type: 'ADD_TODO', payload: state.inputValue})
  }

  const toggleTodo = (event) => {
    event.preventDefault();
    dispatch({type: 'TOGGLE_TODO'})
  }

  return (
    <div>
      <h1>My Todo App!</h1>
      <Form addTodo={addTodo} />
      <TodoList state={state} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;