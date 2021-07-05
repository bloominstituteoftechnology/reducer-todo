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
  dispatch({
  type: "ADD_TODO",
  payload:(newText)
})
}
//------------------

  return (
    <div className="App"> 
      {/* <button onClick = {addNewTodo}>Add Todo</button> */}
          
      <Form addNewTodo = {addNewTodo} />
      <Display toggle = {toggleTodo} todos = {state.todos}/>
      <button onClick ={filterTodo}>delete completed</button>
     
      
    </div>
  );
}

export default App;
