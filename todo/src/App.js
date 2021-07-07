import React, { useReducer } from 'react';
import './App.css';
import {todoReducer, initialData} from "./reducer/reducer"
import TodoList from "./components/todoList"
import TodoForm from "./components/todoForm"

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialData);
  const addTodo = obj => dispatch({type: 'Add', text: obj})
  const toggleComplete = id => dispatch({type: 'tgl_done', id : id})
  const clearCompleted = () => dispatch({type: 'Clear'})

  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
      <TodoList todos={state.todos} toggleComplete={toggleComplete}/>
      
    </div>
  );
}

export default App;
