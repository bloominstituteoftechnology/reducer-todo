import React from 'react'

export const TodoCard = (props) => {
    const { todo, key } = props; 

    return (
        <div>
            <h3>{todo.task}</h3>
        </div>
    )
}
