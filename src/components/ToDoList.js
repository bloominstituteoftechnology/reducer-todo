import React from 'react'
import {ToDoItem} from './ToDoItem'
import {useStateValue} from '../hooks/useStateValue'

export const ToDoList = () => {
    const [{todoList}, dispatch]=useStateValue()

    return (
        <div>
            {todoList && todoList.map(item => <ToDoItem key={item.id} item={item}/>)}
            <button onClick ={() => dispatch({type: 'REMOVE_COMPLETED'})}>Remove Completed</button>
        </div>
    )
}


