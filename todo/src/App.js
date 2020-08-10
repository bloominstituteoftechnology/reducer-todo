import React, { useReducer, useState } from 'react';
import { todoReducer, list } from './reducers/reducer'
import TodoForm  from './components/TodoForm'
import './App.css';



function App() {
  const [ state, dispatch ] = useReducer( todoReducer, list )
  const [ value, setValues ] = useState('')
  console.log(state)
  return (
    <div className="App">
      <TodoForm value={value} setValues={setValues} dispatch={dispatch}/>
    </div>
  );
}

export default App;
