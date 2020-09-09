import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';

import List from './components/list';
import Form from './components/form';

import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <List state={state} dispatch={dispatch} />
      <Form dispatch={dispatch} />
    </div>
  );
}

export default App;