import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;
