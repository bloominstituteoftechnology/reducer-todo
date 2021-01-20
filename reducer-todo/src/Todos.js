import React from 'react'

export default function Todos(props) {
    const handleToggle=(e)=>{
        return({type:"TOGGLE_TODO",payload:e.target})
    }
    return (
        <div>
           {props.todos.map((todo)=>{
               return <p onClick={handleToggle}>{todo.item}</p>
           })}
        </div>
    )
}
