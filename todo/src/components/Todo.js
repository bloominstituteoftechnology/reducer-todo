import React from 'react'
import {setToggleTask} from '../actions/action'


const Todo = (props) => {

    const handleToggle = (e) => {
        e.preventDefault()
        dispatch(setToggleTask(todo.id))
    }

    const {dispatch, todo } = props

    return (
        <div>
            <p onClick = {handleToggle}style = {{
                textDecoration: `${todo.completed ? 'line-through' : 'none'}`
            }}>{todo.item}</p>
        </div>
    )
}

export default Todo
