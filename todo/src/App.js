import React, { useReducer } from 'react';
import './App.css';
import {todoReducer, initialData} from "./reducer/reducer"

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialData);
  const addTodo = obj => dispatch({type: 'Add'})
  const toggleComplete = id => dispatch({type: 'tgl_done', id : id})
  const clearComplete = () => dispatch({type: 'Clear'})

  return (
    <div className="App">
      <h1>Reducer Todo</h1>
    </div>
  );
}

export default App;
