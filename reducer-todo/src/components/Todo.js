import React from 'react';

export default function Todo(props){

    return(
        <h1 onClick = {() =>props.toggle(props.todo.id)}className = {props.todo.completed? "completed": null}>{props.todo.task}</h1>

    )
}