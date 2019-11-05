import React, { useReducer } from 'react';

import Todo from './components/Todo';

import { state, reducer } from './reducers/todoReducer';
import './App.css';

function App() {

  const [{ item, completed, id }, dispatch ] = useReducer(reducer, state)
  console.log('Reducer State from App: ', state)

  return (
    <div className="App"> 
      <h1>Reducer Todo App</h1>
      <div className='todo-list'>
        <Todo state={state} />
      </div>
    </div>
  );
}

export default App;
