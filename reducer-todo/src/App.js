import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <h1 className='fakeTitle'>Watermelon</h1>
      <h1 className='realTitle'>Honey Do</h1>
      <TodoForm />
      {/* <Todo /> */}
    </div>
  );
}
export default App;
