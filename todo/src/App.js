import React, { useReducer } from 'react';
import './App.css';
// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// reducers
import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  //console.log('initial state', state);
  
  const addNewTask = newTaskName => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: newTaskName
    });
  }

  const toggleTask = clickedId => {
    dispatch({
      type: 'TOGGLE_TASK_STATUS',
      payload: clickedId
    })
    //console.log('clicked id:', clickedId, state.tasks);
  }

  const filterTasks = () => {
    dispatch({
      type: 'FILTER_COMPLETED_TASKS'
    })
  }


  return (
    <div className="App">
      <header>
        <h1>Elysia's To Do List</h1>
      </header>
      <TodoForm 
        addNewTask={addNewTask}
        filterTasks={filterTasks}  
      />
      <TodoList 
        tasks={state.tasks} 
        toggleTask={toggleTask} 
      />
    </div>
  );
}

export default App;
