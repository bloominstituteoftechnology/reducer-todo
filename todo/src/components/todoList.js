import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const todoList = (props) => {

    const {state, dispatch} = props

    return (
        <StyledList>
            {state.map((todo) => (
                    <Todo dispatch = {dispatch} todo = {todo} key = {todo.id}/>
                ))}
        </StyledList>
    )
}

const StyledList = styled.div`
    margin-left:9%;
    font-size: 1.5rem;
    `

export default todoList
