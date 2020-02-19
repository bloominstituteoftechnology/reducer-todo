import React, {useReducer} from 'react';
import {reducer, initialState} from './reducers/reducer';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch);

  return (
    <div className="App">
      <h1>Here is the Todo List:</h1>
      <TodoForm />
    </div>
  );
}

export default App;
