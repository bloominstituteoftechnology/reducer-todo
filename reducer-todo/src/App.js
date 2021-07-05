import React,{useState,useReducer} from 'react';
// import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './App.css'
import {initialList, reducer} from './reducers/reducers'


function App () {
  const [state, dispatch] = useReducer(reducer, initialList);
  console.log("useReducer=state",state)
  console.log("useReducer=dispatch",dispatch)
  const [taskInput, setTaskInput] = useState('')

  const inputChange = event =>{
    // console.log("inputChange",event)
    event.preventDefault();
    setTaskInput(event.target.value)
}

  const taskSubmit = event =>{
    event.preventDefault();
    dispatch({type:"ADD_TASK", payload:taskInput})
}   

  const toggleItem = item => {
    // console.log("TOGGLEITEM", item)
    // event.preventDefault();
    dispatch({type:"TOGGLE_IT", payload:item})
  }

const clearCompleted = event =>{
    event.preventDefault();
    dispatch({type:"CLEAR_ALL"})
}


  // console.log("APP State",state)
    return (
      <div className="App">
       <div className="header">
         <h1>To-Do List</h1>
         <TodoForm 
        //  info={state} 
         taskSubmit={taskSubmit}
         clearCompleted={clearCompleted}
         inputChange={inputChange}
         />
         </div>
         <TodoList 
         info={state}
         toggleItem={toggleItem}
        //  clearCompleted={clearCompleted}
         />
          </div>
    )
  
    }

export default App;
