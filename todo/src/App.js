import React from 'react';
import { useReducer } from 'react';
import './App.css';

import {TodoList} from './components/TodoList'; 
import { TodoForm } from './components/TodoForm';
import { todoReducer, initialState } from './reducers/reducer'; 



const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
   
    return (
      <div>
        <TodoForm dispatch={dispatch} />
        <TodoList state={state} dispatch={dispatch} /> 
      </div>
    )
  }

  
export default App;
