import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    return(
        <>
            {props.state.map((event, index) => {
                return(
                    <Todo state={event} key={index} handleComplete={props.handleComplete}/>
                )
            })}
        </>
    )
}