import React, { useReducer } from 'react';
import './App.css';
import { TodoList } from './components/todoList';
import { TodoForm } from './components/todoForm'
import { todoReducer, initialState } from './reducers/reducer';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleCompleted = item =>
    dispatch({ type: "TOGGLE_COMPLETE", payload: item });

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList toggleCompleted={toggleCompleted} state={state}/>
    </div>
  );
}

export default App;
