import React from 'react';

const Todo = (props) => {
    console.log('Todo Component Props: ', props)
    return (
        <div className='todo-list'>
            {props.state.map(todo => {
                return (
                    <div className='todo-card' key={todo.id}>
                        <p>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;