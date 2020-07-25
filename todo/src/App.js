import React from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoTitle from "./components/TodoTitle";
// import TodoCard from "./components/TodoCard";


function App() {

  return (
    <div className="App">
      <TodoTitle />
      {/* <TodoCard /> */}
      <TodoForm />
    </div>
  );
}

export default App;
