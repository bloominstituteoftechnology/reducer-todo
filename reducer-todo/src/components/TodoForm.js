import React, {useReducer, useState} from 'react'
import {initialList, reducer} from '../reducers/reducers'

const TodoForm = props => {
    const [state, dispatch] = useReducer(reducer, initialList);
    const [taskInput, setTaskInput] = useState('')

    const taskSubmit = event =>{
        event.preventDefault();
        dispatch({type:"ADD_TASK", payload:taskInput})
    }   

    const clearCompleted = event =>{
        event.preventDefault();
        dispatch({type:"CLEAR_COMPLETED"})
    }

    const inputChange = event =>{
        // console.log(event)
        event.preventDefault();
        setTaskInput(event.target.value)
    }
    
        return(
            <div>
              <form >
                <input type="text"
                value={taskInput}
                name="taskInput"
                onChange={inputChange}
                />
                <button onClick={event=> {taskSubmit(event)}}>Add Todo</button>
                <button onClick={()=> {clearCompleted()}}>Clear Completed</button>
              </form>
            </div>
    
        )
   

}

export default TodoForm