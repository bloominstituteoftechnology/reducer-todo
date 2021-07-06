import React, {useReducer} from 'react';
import './App.css';

import {initialState, reducer} from "./reducers/reducer"
import Form from "./components/Form"
import Item from "./components/Item"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form dispatch={dispatch}/>
      <button onClick={() => dispatch({type: "removeCompleted"})}>Remove Completed</button>
      {state.map(item => {
        return <Item key={item.id} item={item} dispatch={dispatch}/>
      })}
      
    </div>
  );
}

export default App;
