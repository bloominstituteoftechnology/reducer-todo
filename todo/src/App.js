import React from 'react';
import './App.css';
import {TodoForm} from './components/todoForm';



function App() {
  // console.log(props.value)
  return (
    <div className="App">
      <h1>Todo List!</h1>
      
{/* <TodoList todo={state}/> */}
<TodoForm />
    </div>
  );
}

export default App;
