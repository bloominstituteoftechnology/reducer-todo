import React, {useReducer} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList'
import './App.css';

import {reducer, initialState} from './reducers/Reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = task => {
    dispatch({
      
    })}

  const toggleComplete = (id) => {
    dispatch({
      type: 'TOGGLE_ITEM',
      payload: id
    })
  }

  console.log(state)

  
  return (
  
    <div className="App">
    <Form dispatch={dispatch} />
    <TodoList todos= {state.todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
