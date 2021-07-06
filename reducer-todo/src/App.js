import React, {useReducer} from 'react';
import './App.css';
import Form from './components/form'
import {initialState, reducer} from './reducers/todoReducer'
import List from './components/List'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('app.js state', state)

  return (
    <div className="App">
      <Form dispatch={dispatch}/>
      <List state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
