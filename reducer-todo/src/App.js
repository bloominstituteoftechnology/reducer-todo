 import React from 'react'
 import TodoForm from "../src/components/todoForm"
 import Todos from "../src/components/todos"




import './App.css';

function App() {
  return (
    
      <div className="App">
        <div className="header">
           <h1>LIST OF TODOS</h1>
           <TodoForm />
         </div>
               <Todos/>
      

    </div>
  );
}

export default App;
