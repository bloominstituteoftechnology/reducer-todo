import React, {useState, useReducer} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import {reducer, initialState} from './reducers'

// const defaultData = [
//   {
//     task: 'Finish Assignment',
//     id: 1001,
//     completed: false
//   },
//   {
//     task: 'Watch Netflix',
//     id: 1002,
//     completed: false
//   }
// ]

const blankTask = {
  task: ''
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [todoData, setData] = useState(defaultData)
  const [taskText, setTask] = useState(blankTask)

// const addTask = taskName => {

  // console.log(todoData, 'tododata')
  // console.log(newTask, 'new task')
  // console.log(taskText, 'task text')

  // setData(
  //  [...todoData, newTask]
  // )
  



const onSubmit = event => {
    event.preventDefault()
    // addTask(taskText)
    dispatch({type: "ADD_TODO", payload: taskText.task})
    setTask(blankTask)
  }

const onChange = event => {
 const value = event.target.value
 setTask({...taskText, [event.target.name]:value})
  }

const onComplete = event => {
    // event.preventDefault()
    // setData(
    //   todoData.filter(task => {
    //       return task.completed === false
    //     })
    // )
    dispatch({type:"IS_CLEARED"})
}

const onToggle = id => {
  // setData(
  //    todoData.map(task => {
  //     if (task.id === id){
  //       return {...task, completed: !task.completed};
  //     } else {
  //       return task
  //     }
  //   })
  // )
  dispatch({type:"IS_COMPLETED", payload: state.id})
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


    <TodoList task={initialState} onToggle={onToggle} dispatch={dispatch}/>
    </div>
  );
  
}

export default App;
