import React, {useReducer} from 'react';
import './App.css';

import initialState from './reducers/Reducer';
import Reducer from './reducers/Reducer';

function App() {

  const [state, dispatch] = useReducer();

  const addTask = task => {
    dispatch()
  }

  console.log(state)

  
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
