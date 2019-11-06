import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducers'
import './App.css';
import TaskList from './components/TaskList';

function App() {

  const [newTask, setNewTask] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeHandler = e => {
    setNewTask(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TASK', payload: newTask})
    setNewTask('') 
  }

  const markCompleted = (task) => {
    dispatch({type: 'MARK_COMPLETED', payload: task.id})
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
      <TaskList tasks={state} markCompleted={markCompleted}/>
    </div>
  );
}

export default App;
