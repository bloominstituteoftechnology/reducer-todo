import React, { useReducer } from 'react';
import './App.css';
import { toDoReducer, initialToDoState } from "./reducers/Reducers";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

function App() {
  
  const [state, dispatch] = useReducer(toDoReducer, initialToDoState);

  const addNewTask = newTaskName => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: newTaskName
    });
  }

  const toggleTask = clickToDo => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: clickToDo
    });
  }

  const clearCompletedTask = ()=> {
    dispatch({
      type: 'CLEAR_COMPLETED',
    })
  }

  return (
    <div className="App">
      <header>
        <p>
          To Do List
        </p>
      </header>
      <TodoForm addNewTask={addNewTask} clearCompletedTask={clearCompletedTask}/>
      <TodoList tasks={state.tasks} toggleTask={toggleTask}/>
    </div>
  );
}

export default App;
