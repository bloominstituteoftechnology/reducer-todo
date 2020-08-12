import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import { reducer, initialState } from './reducers'


const blankTask = {
  task: '',
  id: new Date(),
  completed: false
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [taskText, setTask] = useState(blankTask)
console.log(state, 'state')

  const addTodo = event => {
    event.preventDefault()
    dispatch({ type: "ADD_TODO", payload: taskText })
    setTask(blankTask)
    console.log(taskText, 'onsubmit console')
  }

  const onChange = event => {
    const value = event.target.value
    setTask({ ...taskText, [event.target.name]: value })
  }

  const onComplete = event => {
    dispatch({ type: "IS_CLEARED" })
  }

  const onToggle = id => {
    dispatch({ type: "IS_COMPLETED", payload: id })
  }

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <form onSubmit={addTodo}>
        <div>
          <input
            type="text"
            name="task"
            value={taskText.task}
            onChange={onChange}
          />
          <button type='submit'>Add Task</button>
        </div>
        <div>
          <button onClick={onComplete}>Clear Task</button>
        </div>
      </form>


      <TodoList onToggle={onToggle} state={state} />
    </div>
  );

}

export default App;
