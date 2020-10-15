import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
 
  return (
    <div className="App">
      <h1>React TODO</h1>
        <TodoForm />
        <TodoList />
    </div>
  );
}
export default App;
