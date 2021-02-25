import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import { initialState, reducer } from './reducers/reducer'
import './App.css';

function App() {
  const[state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  const addTask = (input) =>{
    const newTask ={
      task: input,
      completed: false,
      id: Date.now()
    }
    dispatch({type:"ADD_TASK", payload: newTask})
  }

  const toggleComplete = (id) =>{
    dispatch({type: "COMPLETE_TASK", payload: id})
  }

  const clearCompleted =() =>{
    dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

    <TodoForm  addTask={addTask}/>
    <TodoList state={state} toggleComplete={toggleComplete} />
    <button onClick ={(e)=>{
      e.preventDefault();
      clearCompleted();
    }}>Clear Completed</button>
    </div>
  );
}

export default App;
