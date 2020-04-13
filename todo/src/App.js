import React from 'react';
 import './App.css';
 import Todo from './components/Todo';


 function App() {
   return (
    
     <div className="App"> 
     <div>
       <h1>
         Todo List
       </h1>
     </div>
       <Todo />
     </div>
   );
 }

 export default App;