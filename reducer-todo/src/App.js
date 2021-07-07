
import React, { useReducer } from 'react';
import './App.css';
import {initialState, ReducerList} from './reducers/ReducerList';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(ReducerList, initialState);

  return (
    <div className="App">
      <h1>To-Do or not To-Do</h1>
      
      <Todo state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;