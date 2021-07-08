import React from 'react';

const Todo = (props) => {
    console.log('Todo Component Props: ', props)
    return (
        <div className='todo-list'>
            {props.state.map(todo => {
                return (
                    <div style={todo.completed ? {textDecoration:'line-through'} : null} key={todo.id} >
                        <p onClick={() => {props.dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}}>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;