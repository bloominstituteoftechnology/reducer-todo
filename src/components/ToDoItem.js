import React from 'react'
import {useStateValue} from '../hooks/useStateValue'
import moment from 'moment'
import styled from 'styled-components'
export const ToDoItem = (props) => {
    const [,dispatch] = useStateValue()
    let overdue = !(moment(props.item.deadline).isAfter(moment(), 'day') || moment(props.item.deadline).isSame(moment(), 'day'))
    return (
        <ToDoItemDiv overdue={overdue} completed={props.item.completed} onClick={() => dispatch({type:'COMPLETE_ITEM', payload: props.item.id})}>
            {overdue && <h4>Maybe you should look at the deadline...</h4>}
            <h3>{props.item.todo}</h3>
            <div className='tags'>
                {props.item.tags && props.item.tags.map(tag => <h4 key={tag}>{tag}</h4>)}
            </div>
            <h4>Deadline: {moment(props.item.deadline).format('MMMM Do YYYY')}</h4>
            {props.item.timeCompleted && <h5>Completed: {props.item.timeCompleted}</h5>}
        </ToDoItemDiv>
    )
}

const ToDoItemDiv = styled.div`
    width: 60%;
    margin: 10px auto;
    text-align: center;
    background: ${props => props.theme.secondaryColor}
    border-radius: 10px;
    .tags{
        display: flex;
        justify-content: center;

        h4{
            margin: 0 10px;
            background: ${props => props.theme.primaryColor}
            border-radius: 10px;
            padding: 5px;
        }
    }

    h3, h4{
        color: ${props => props.overdue ? 'red' : 'black'}
        text-decoration: ${props => props.completed && 'line-through' }
    }

    h3{
        font-size: ${props => props.theme.largeFont}
    }

    h4{
        font-size: ${props => props.theme.smallFont}
    }

    h5{
        font-weight: 800;
    }

`
    