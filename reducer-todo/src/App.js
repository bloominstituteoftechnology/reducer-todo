 import React from 'react'
 import TodoList from "../src/components/todoList"
 import './App.css';
 

function App() {
  
  return (
    
      <div className="App">
        <div className="header">
           <h1>LIST OF TODOS</h1>
           <TodoList />
         </div>
               
      

    </div>
  );
}

export default App;
