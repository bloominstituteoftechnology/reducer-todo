import React from 'react'
import {ToDoItem} from './ToDoItem'
import {useStateValue} from '../hooks/useStateValue'
import styled from 'styled-components'
export const ToDoList = (props) => {
    const [{todoList}, dispatch]=useStateValue()
    return (
        <ToDoDiv>
            <button onClick ={() => dispatch({type: 'REMOVE_COMPLETED'})}>Remove Completed</button>
            {todoList && todoList.map(item => <ToDoItem key={item.id} item={item}/>)}
        </ToDoDiv>
    )
}


const ToDoDiv = styled.div`
    width: 800px;
    margin: 0 auto;
    
    button{
        display: block;
        border: 1px solid #bdbdbd;
        background: #f2f2f2;
        border-radius: 5px;
        padding: 5px;
        background-position: 8px 9px;
        width: 175px;
        margin: 10px auto;
        margin-top: 30px;
        &:hover{
            background-color: #ffffff;
            border: 1px solid #b1e1e4;
            outline: none;
        }
    }
`