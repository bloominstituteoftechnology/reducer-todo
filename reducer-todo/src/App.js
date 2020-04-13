import React from 'react';
// import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './App.css'



function App () {




  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    return (
      <div className="App">
       <div className="header">
         <h1>To-Do List</h1>
         <TodoForm  />
         </div>
         <TodoList 
           
       
         
         />
 
        
      </div>
    )
  
    }

export default App;
