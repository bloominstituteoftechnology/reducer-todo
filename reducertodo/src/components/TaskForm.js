import React, {useState, useEffect, useReducer} from 'react'
import { initialState, toDoReducer } from '../reducers/reducer'

import Task from './Task'


const TaskForm = () => {
    
    const [state, dispatch] = useReducer(toDoReducer, initialState)
     const [newtask, setnewTask] = useState('')

      
     const handleChange = e =>  {
            setnewTask(e.target.value)
            console.log('HC', newtask)
        }

        const handleSubmit = e =>  {
            e.preventDefault()
            // 
            dispatch({type: "Set_Task", payload: newtask })
            setnewTask('')
            console.log('HS', state)
        }



        const toggleCompleted = (id) => {
            dispatch({ type: "Toggle_Completed", id: id })
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
        </>
       
    )
}

export default TaskForm
