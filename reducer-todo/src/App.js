import React, {useReducer} from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import {initialState, todoReducer} from './Components/reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(todoReducer,initialState);

  


  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList state={state}  dispatch={dispatch}/>
    </div>
  );
}

export default App;
