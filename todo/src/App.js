import React,{useState,useReducer} from 'react';
import Todos from './components/Todos'

import './App.css';

import {initial,reducer } from './reducers/reducer'


function App() {
  const [state,dispatch]=useReducer(reducer,initial)

  
  return (
    <div className="App">
      <input 
      onChange={(evt)=>dispatch({type:'titleUpdate',payload:evt.target.value})} 
        type='text'
         placeholder='New To Do'
         value= {state.newTodo.title}
         />
      <textarea
       onChange={(evt)=>dispatch({
         type:'descriptionUpdate',
         payload:evt.target.value})}/>
      <button onClick={evt=>{
        dispatch({type:'addTodo'})
      
        
        }}>Send</button>
      <buttton onClick={evt =>{dispatch({type:'clearComplete'})}}> clear</buttton>

      <div>
        {
        
        state.todos.map(item=>{
          
         return  <Todos dispatch={dispatch} item={item} />
        })}

      </div>
    </div>
  );
}

export default App;
