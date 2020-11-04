import './App.css';
import React, { useReducer } from 'react';
import TaskForm from './Components/TaskForm'
import TasksReducer, {initialTasks} from './Reducers/Tasks'

const initialId = 0
const initialTask = '';




function idReducer(id, action) {
  switch (action.type) {
    case 'increment':
      return id + 1;
    default:
      return id
  }
}

function taskReducer(task, action) {
  switch (action.type) {
    case 'change':
      return action.payload;
    case 'clear':
      return ''
    default:
      return task
  }
}


function App() {
  const [tasks, dispatch] = useReducer(TasksReducer, initialTasks)
  const [id, dispatchId] = useReducer(idReducer, initialId)
  const [task, dispatchTask] = useReducer(taskReducer, initialTask)
  function clicky(){
    console.log(task);
    dispatch({ type: 'ADD_TODO', payload: {
      item: task,
      completed: false,
      id: id
    }})
    dispatchId({type: 'increment'})
    dispatchTask({type: 'clear'})
    console.log(tasks);
  }
  
  return (
    <div className="App">
     
      
      {tasks.map(a => <div id={a.id} key={a.id} onClick={() => 
        
        dispatch({type: a.completed?'CHANGE_INCOMPLETE':'CHANGE_COMPLETE', id: a.id})
        
        } className={a.completed? 'completed': 'not'}>{a.item}</div>)}
      <br></br>
      <TaskForm task={task} dispatchTask={dispatchTask}/>
      <br></br>
      
      <button onClick={clicky}>Add Task</button>
      <br></br>
      <br></br>

      
      <button onClick={() => { dispatch({type: 'CLEAR-COMPLETED'})}}>Clear Completed</button>
      

    </div>
  );
}

export default App;
