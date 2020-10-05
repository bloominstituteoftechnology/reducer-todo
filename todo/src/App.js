import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (


    <div className="App">
      <ToDoList state={state} dispatch={dispatch} />
      <ToDoForm dispatch={dispatch} />
    </div>


  );
}

export default App;