import React, {useState, useReducer} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import reducer from './reducers'

const defaultData = [
  {
    task: 'Finish Assignment',
    id: 1001,
    completed: false
  },
  {
    task: 'Watch Netflix',
    id: 1002,
    completed: false
  }
]

const blankTask = {
  task: ''
}

function App() {

  const [todoData, setData] = useState(defaultData)
  const [taskText, setTask] = useState(blankTask)

const addTask = taskName => {
  const newTask = {
    task: taskName.task,
    id: new Date(),
    completed: false
  }

  console.log(todoData, 'tododata')
  console.log(newTask, 'new task')
  console.log(taskText, 'task text')

  setData(
   [...todoData, newTask]
  )
}


const onSubmit = event => {
    event.preventDefault()
    addTask(taskText)
    setTask(blankTask)
  }

const onChange = event => {
 const value = event.target.value
 setTask({...taskText, [event.target.name]:value})
  }

const onComplete = event => {
    event.preventDefault()
    setData(
      todoData.filter(task => {
          return task.completed === false
        })
    )
}

const onToggle = id => {
  setData(
     todoData.map(task => {
      if (task.id === id){
        return {...task, completed: !task.completed};
      } else {
        return task
      }
    })
  )
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


    <TodoList task={todoData} onToggle={onToggle}/>
    </div>
  );
}

export default App;
