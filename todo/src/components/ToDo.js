import React from 'react'
import {toggleCompleted} from '../actions/ToDoActions';


const ToDo = (props) => {
    const {dispatch, task} = props

    const onClick = () => {

        dispatch(toggleCompleted(task.id))
        console.log(task.id)

    }

    return (
        
        <div className={task.completed === true ? 'completed' : ''} onClick={onClick}>
            <p>{task.task}</p>
        </div>
        
    )
}

export default ToDo
