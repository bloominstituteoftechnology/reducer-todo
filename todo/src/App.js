import React, {useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';




const App = () => {
 const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <div className='App'>
        <div className='header'>
          <h2>RENDER IT COMPLETE: </h2>
          <TodoForm dispatch={dispatch}/>
        </div>
        <TodoList state={state} dispatch={dispatch}/>
      </div>
    );
  }


export default App;
