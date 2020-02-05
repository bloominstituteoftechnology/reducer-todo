import React from 'react'


const Todo = (props, {complete, onClick}) => (
    <li
    onClick= {onClick}
    style={{textDecoration: complete ? 'line-through' : 'none'}}
    >
        {props.name}
    </li>
)

export default Todo