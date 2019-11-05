import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducers'
import './App.css';
import TaskList from './components/TaskList';

function App() {

  const [newTask, setNewTask] = useState('')
  const [{ tasks }, dispatch] = useReducer(reducer, initialState)

  const changeHandler = e => {
    setNewTask(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TASK', payload: newTask})
    setNewTask('') 
  }

  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <form onSubmit={submitForm}>
        <input 
          type='text'
          name= 'newToDo'
          onChange={changeHandler}
          value={newTask}
          placeholder= 'add task'
        />
        <button type='submit'>Add Task</button>
      </form>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
