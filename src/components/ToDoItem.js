import React from 'react'
import {useStateValue} from '../hooks/useStateValue'

export const ToDoItem = (props) => {
    const [,dispatch] = useStateValue()
    return (
        <div>
            <h3 onClick={() => dispatch({type:'COMPLETE_ITEM', payload: props.item.id})}>{props.item.todo}</h3>
        </div>
    )
}


    