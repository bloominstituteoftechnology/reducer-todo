import React, {useReducer} from 'react'
import Todo from './Todo'
import {reducer} from '../reducers'

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, [])

    console.log('todo list state', state)
return (
    <div>

        {state.map(task => {
            return(
        <Todo key={task.id} task={task} onToggle={props.onToggle}  />
        )
            })}
        </div>

)}

export default TodoList