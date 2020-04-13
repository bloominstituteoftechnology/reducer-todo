import React, {useReducer, useState} from 'react'
// import {initialList, reducer} from '../reducers/reducers'

const TodoForm = props => {
    console.log("props",props)
    // const [state, dispatch] = useReducer(reducer, initialList);
    const [taskInput, setTaskInput] = useState('')

    
        return(
            <div>
              <form >
                <input type="text"
                value={props.taskInput}
                name="taskInput"
                onChange={props.inputChange}
                />
                <button onClick={event=> {props.taskSubmit(event)}}>Add Todo</button>
                <button onClick={event=> {props.clearCompleted(event)}}>Clear Completed</button>
              </form>
            </div>
    
        )
   

}

export default TodoForm