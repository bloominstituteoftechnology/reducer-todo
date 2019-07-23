import React from 'react'
import {useStateValue} from '../hooks/useStateValue'
import moment from 'moment'

export const ToDoItem = (props) => {
    const [,dispatch] = useStateValue()
    let overdue = !(moment(props.item.deadline).isAfter(moment(), 'day') || moment(props.item.deadline).isSame(moment(), 'day'))
    return (
        <div>
            <h3 onClick={() => dispatch({type:'COMPLETE_ITEM', payload: props.item.id})}>{props.item.todo}</h3>
            <h4>Deadline: {moment(props.item.deadline).format('MMMM Do YYYY')}</h4>
            {props.item.timeCompleted && <h4>Completed{props.item.timeCompleted}</h4>}
        </div>
    )
}


    