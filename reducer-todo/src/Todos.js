import React from 'react'

export default function Todos(props) {
    console.log(props.todos);
    return (
        <div>
           {props.todos.map((todo)=>{
               return <p>{todo.item}</p>
           })}
        </div>
    )
}
