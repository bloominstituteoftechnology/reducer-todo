 import React from 'react'
 import TodoForm from "./components/TodoForm"
 import './App.css';
 import Todo from "./components/todo"
 import {todos} from "./components/reducer/reducer"

function App() {
  const todos= [
   {
    todo: "learn about reducers",
    complete:false,
    id: 1
  }]



  
  return (
    
      <div className="App">
        <div className="header">
           <h1>LIST OF TODOS</h1>
           <TodoForm todos={todos}/>
           
         </div>
               
      

    </div>
  );
}

export default App;
