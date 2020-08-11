import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import { reducer, initialState } from './reducers'


const blankTask = {
  task: ''
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [taskText, setTask] = useState(blankTask)


  const onSubmit = event => {
    event.preventDefault()
    dispatch({ type: "ADD_TODO", payload: taskText.task })
    setTask(blankTask)
  }

  const onChange = event => {
    const value = event.target.value
    setTask({ ...taskText, [event.target.name]: value })
  }

  const onComplete = event => {
    dispatch({ type: "IS_CLEARED" })
  }

  const onToggle = id => {
    dispatch({ type: "IS_COMPLETED", payload: state.id })
  }

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <form>
        <div>
          <input onSubmit={onSubmit}
            type="text"
            name="task"
            value={taskText.task}
            onChange={onChange}
          />
          <button onClick={onSubmit}>Add Task</button>
        </div>
        <div>
          <button onClick={onComplete}>Clear Task</button>
        </div>
      </form>


      <TodoList task={initialState} onToggle={onToggle} dispatch={dispatch} />
    </div>
  );

}

export default App;
