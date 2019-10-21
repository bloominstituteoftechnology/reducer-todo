import React from 'react';

const Todo = ({todo, dispatch}) => {

    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        })
    }

    return (
        <div onClick = {toggleCompleted}
             className = {`todo${todo.completed ? 'completed': ''}`}
             style = {{ textDecoration: todo.completed ? 'line-through':''}}>
            <p>
                {todo.item}
            </p>
        </div>
    )
}

export default Todo;