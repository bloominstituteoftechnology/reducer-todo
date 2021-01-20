 import React from 'react'
 import TodoForm from "./components/TodoForm"
 import './App.css';
 import Todo from "./components/todo"
 import {todos} from "./components/reducer/reducer"

function App() {
  
  return (
    
      <div className="App">
        <div className="header">
           <h1>LIST OF TODOS</h1>
           <TodoForm />
           <Todo todos={todos}/>
         </div>
               
      

    </div>
  );
}

export default App;
