import React, { useReducer } from 'react';
import './App.css';
import { toDoReducer, initialToDoState } from "./reducers/Reducers";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  
  const [state, dispatch] = useReducer(toDoReducer, initialToDoState);

  const addNewTask = newTaskName => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: newTaskName
    });
  }

  return (
    <div className="App">
      <header>
        <p>
          To Do List
        </p>
      </header>
      <TodoForm addNewTask={addNewTask}/>
      <TodoList tasks={state.tasks} />
    </div>
  );
}

export default App;
