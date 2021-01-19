import React, { useReducer } from 'react';
import './App.css';
import reducer from './reducers/Reducer';
import { addTask, markDone, clearDone } from './actions/actions';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList'


// console.log(initialState)

// let currentState = reducer(initialState, addTodo('Cook Dinner'))
// console.log(currentState)

// currentState = reducer(initialState, markDone(true))
// console.log(currentState)
export const initialState = []

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const setTask = (task) => {
    dispatch(addTask(task))
  }

  const finishTask = taskID => {
    dispatch(markDone(taskID))
  }

  const clearChecked = () => {
    dispatch(clearDone())
  }
console.log(state)

  return (
    <div className='task-container'>
      <h1>Your Todo App</h1>
      < TodoForm setTask={setTask} clearChecked={clearChecked} />
      < TaskList finishTask={finishTask} taskList={state} />
    </div>
  )
}

export default App;