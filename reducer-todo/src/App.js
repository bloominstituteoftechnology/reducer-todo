 import React from 'react'
 import TodoForm from "./components/TodoForm"
 import './App.css';
 import Todo from "./components/todo"
 

function App() {
  
  return (
    
      <div className="App">
        <div className="header">
           <h1>LIST OF TODOS</h1>
           <TodoForm />
           <Todo/>
         </div>
               
      

    </div>
  );
}

export default App;
