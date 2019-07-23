import React from 'react'
import {ToDoItem} from './ToDoItem'
import {useStateValue} from '../hooks/useStateValue'
import styled from 'styled-components'
import {Submit} from './AddForm'
export const ToDoList = (props) => {
    const [{todoList}, dispatch]=useStateValue()
    return (
        <ToDoDiv>
            <RemoveButton as='button' onClick ={() => dispatch({type: 'REMOVE_COMPLETED'})}>Remove Completed</RemoveButton>
            {todoList && todoList.map(item => <ToDoItem key={item.id} item={item}/>)}
        </ToDoDiv>
    )
}


const ToDoDiv = styled.div`
    width: 800px;
    margin: 0 auto;
`

const RemoveButton = styled(Submit)`
    display: block;
    margin-top: 15px;
`