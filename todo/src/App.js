import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './reducers/reducer' ;

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className='app'>
      <ToDoForm dispatch={dispatch}/>
      <ToDoList dispatch={dispatch} todos={state}/>
    </div>
  );
}

export default App;
