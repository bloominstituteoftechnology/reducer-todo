import React, {useReducer} from 'react';
import  {todoReducer, initialState} from './reducers/todoReducer';

import './App.css';



function App() {
  const [state,dispatch] = useReducer(todoReducer,initialState);
  return (
    <div className="App">

    </div>
  );
}

export default App;
