import React, { useReducer } from 'react';
import { todoReducer, todo } from './reducers/todoReducer';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';


function App() {
  const [state, dispatch] = useReducer(todoReducer, todo)
  return (
    <div className="App">
      <header>Todo List</header>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;