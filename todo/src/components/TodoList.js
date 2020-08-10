import React, {useState} from 'react'
import Todo from './Todo'

const TodoList = props => {

return (
    <div>
        {console.log('this is props task in todolist', props.task)}

        {props.task && props.task.map(task => {
            return(
        <Todo key={task.id} task={task} onToggle={props.onToggle} />
        )
            })}
        </div>

)}

export default TodoList