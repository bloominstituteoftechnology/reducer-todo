import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoReducer, initialState } from './components/reducers/TodoReducer';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoList />
      <TodoForm
        key={state.id}
        name={state.item}
        completed={state.completed} />
    </div>
  );
}

export default App;
