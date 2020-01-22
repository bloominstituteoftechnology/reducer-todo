import React, {useState, useReducer} from 'react'
import { initialState, toDoReducer } from '../reducers/reducer'

import Task from './Task'


const TaskForm = () => {
    
    const [state, dispatch] = useReducer(toDoReducer, initialState)
     const [newtask, setnewTask] = useState('')
  
     const handleChange = e =>  {
            setnewTask(e.target.value)          
        }

        const handleSubmit = e =>  {
            e.preventDefault()
            // 
            dispatch({type: "Set_Task", payload: newtask })
            setnewTask('')          
        }

        const toggleCompleted = (id) => {
            dispatch({ type: "Toggle_Completed", payload: id })
        }

        const handleDestroy = () => {
            dispatch({ type: "Destroy_Completed" })
        }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder= 'add task'
                value={newtask}
                onChange={handleChange}
            />
                <button type='submit'>Submit</button>
        </form>
        <div>
              
             {state.map(task => {
             return <Task task={task} toggleCompleted={toggleCompleted} key={task.id}/>
             
            })}
           
        </div>

        <button onClick={handleDestroy}>Destroy</button>
        </>
       
    )
}

export default TaskForm
