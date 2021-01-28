import React, { useReducer } from 'react';
import todoReducer, { initialState, TOGGLE_COMPLETED } from '../reducers/todoReducer';

import TodoForm from './TodoForm';
import TodoClear from './TodoClear';

import './Todo.css';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    
    const handleComplete = id => {
        dispatch({ type: TOGGLE_COMPLETED, payload: id })
    }
    console.log(state)
    return (
        <>
            <TodoForm dispatch={dispatch}/>
            <div>
            {state.map((list) => {
                return <h2 key={list.id} 
                onClick={() => handleComplete(list.id)}
                className={`${list.completed ? ' complete' : ''}`}
                >{list.item}</h2>
            })}
            </div>
            <TodoClear dispatch={dispatch}/>
        </>
    );
};

export default TodoList;