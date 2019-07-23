import React from 'react'
import {useStateValue} from '../hooks/useStateValue'
import moment from 'moment'
import styled from 'styled-components'
export const ToDoItem = (props) => {
    const [,dispatch] = useStateValue()
    let overdue = !(moment(props.item.deadline).isAfter(moment(), 'day') || moment(props.item.deadline).isSame(moment(), 'day'))
    return (
        <ToDoItemDiv overdue={overdue} completed={props.item.completed}>
            <h3 onClick={() => dispatch({type:'COMPLETE_ITEM', payload: props.item.id})}>{props.item.todo}</h3>
            <div className='tags'>
                {props.item.tags && props.item.tags.map(tag => <h4 key={tag}>{tag}</h4>)}
            </div>
            <h4>Deadline: {moment(props.item.deadline).format('MMMM Do YYYY')}</h4>
            {props.item.timeCompleted && <h5>Completed: {props.item.timeCompleted}</h5>}
        </ToDoItemDiv>
    )
}

const ToDoItemDiv = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
    .tags{
        display: flex;
        justify-content: center;
        h4{
            margin: 0 10px;
        }
    }
    h3, h4{
        color: ${props => props.overdue ? 'red' : 'black'}
        text-decoration: ${props => props.completed && 'line-through' }
    }

`
    