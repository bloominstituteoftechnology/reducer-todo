import React from 'react';
import { state } from '../reducers/todoReducer';

const Todo = (props) => {
    console.log('Todo Component Props: ', props)
    return (
        <div className='todo-card'>
            <p>{state.item}</p>
        </div>
    )
}

export default Todo;