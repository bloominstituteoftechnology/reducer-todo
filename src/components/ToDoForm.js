import React, { useReducer, useState } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoForm = props => {
    const [state, dispatch] = useReducer(todoReducer,initialState)
    const [todoInput, setTodoInput] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setTodoInput(e.target.value)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
            className='' //todoInput
            type='text'
            value={todoInput}
            onChange={handleChange}
            />
            <button onClick={ () => dispatch({
                type: 'ADD_TODO',
                payload: todoInput
            })}> Add </button>
        </div>
    )

}

export default TodoForm;