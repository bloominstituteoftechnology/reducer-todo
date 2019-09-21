import React, {useReducer} from 'react';
import './App.css';

import {initialState, reducer} from "./reducers/reducer"
import Form from "./components/Form"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Form dispatch={dispatch}/>
      {state.map(item => {
        return <p key={item.id}>{item.item}</p>
      })}
    </div>
  );
}

export default App;
