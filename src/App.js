import React, { useReducer } from 'react';
import {reducer, initialState} from './reducers/reducer';
import Todoform from './components/Todoform';
import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch);

  return(
    <div className='App'>
      <h1>What To Do?</h1>
      <Todoform />
    </div>
  );
}


export default App;
