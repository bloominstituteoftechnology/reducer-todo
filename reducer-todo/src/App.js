import React, {useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer'; 
import Display from "./components/Display";
import Form from './components/Form';
import './App.css';

function App() {
  const [ state, dispatch] = useReducer(reducer, initialState)

 const toggleTodo = (id) => {
   dispatch({
     type:"TOGGLE",
     payload:id
    })
 }

 const filterTodo = () => {
  dispatch({
    type:"FILTER"
    
   })
}
//--------------


const addNewTodo = (newText) =>{
  const newItem = {
    task: newText,
    completed: false,
    id:Date.now()
  }
dispatch({
  type: "ADD_TODO",
  payload:newItem
})
}
//------------------

  return (
    <div className="App"> 
      {/* <button onClick = {addNewTodo}>Add Todo</button> */}
      <Form addtodo ={addNewTodo} newText = {state.newText}/>     
      <Display toggle = {toggleTodo} todos = {state.todos}/>
      <button onClick ={filterTodo}>delete completed</button>
     
      
    </div>
  );
}

export default App;
