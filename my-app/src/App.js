import React, {useState, useReducer} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import {initialState, reducer} from "./reducers/reducer";




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList state={state}/>
    </div>
  );
}

export default App;
