import React, { useReducer, useState } from 'react';

import Todo from './Todo'

import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoForm = props => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const [todoInput, setTodoInput] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setTodoInput(e.target.value)
    }

    const handleClear = e => {
        e.preventDefault();
        dispatch({ type: "CLEAR", payload: null });
    }

    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <input
                    className='' //todoInput
                    type='text'
                    value={todoInput}
                    onChange={handleChange}
                />
                <button onClick={() => dispatch({
                    type: 'ADD_TODO',
                    payload: todoInput
                })}> Add </button>
                <button onClick={() => dispatch({
                    type: 'CLEAR',
                    payload: todoInput
                })}> Clear </button>
            </div>
            <div>
                {/* <TodoItem state={state} /> */}
                {state.map(state => {
                    return (
                        <div className={state.completed ? 'completed' : ''} onClick={() => { dispatch({ type: 'TOGGLE', payload: state.id }) }} >

                            <p>{state.item}</p>

                        </div>


                    )
                })}
            </div>
        </div>
    )

}

export default TodoForm;