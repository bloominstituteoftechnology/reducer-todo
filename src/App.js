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

  const addTask = e => {
    e.preventDefault()
    dispatch({type: 'ADD_TASK', payload: newTask})
    setNewTask('')
  }

  const addEditedTask = (task) => {
    return event => {
      event.preventDefault()
      dispatch({type: 'ADD_EDITED_TASK', payload: task})
    }
  }

  const markCompleted = (task) => {
    dispatch({type: 'MARK_COMPLETED', payload: task.id})
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  const deleteTask = (task) => {
    dispatch({type: 'DELETE_TASK', payload: task.id})
  }

  const editTask = (task) => {
    dispatch({type: 'EDIT_TASK', payload: task.id})
  }

  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <form onSubmit={addTask}>
        <input 
          type='text'
          name= 'newToDo'
          onChange={changeHandler}
          value={newTask}
          placeholder= 'add task'
        />
        <button type='submit'>Add Task</button>
      </form>
      <button onClick={() => clearCompleted()}>Clear completed</button>
      <TaskList 
        tasks={state} 
        markCompleted={markCompleted} 
        deleteTask={deleteTask}
        editTask={editTask}
        addTask={addTask}
        addEditedTask={addEditedTask}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
