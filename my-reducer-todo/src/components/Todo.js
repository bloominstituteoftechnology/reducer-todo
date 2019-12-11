import React from 'react'

export default function Todo(props) {

    return(
        <h2 className={props.state.completed ? 'change' : ''}
            onClick={(e) => {
            e.preventDefault()
            props.handleComplete(props.state.id)
        }}>{props.state.item}</h2>
    )
}

// <h2 style={props.state.item.completed ? {textDecoration: 'line-through DarkRed', color: 'gray'}: null}