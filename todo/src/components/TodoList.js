import React, { useReducer } from 'react';
import todoReducer, { initialState, TOGGLE_COMPLETED } from '../reducers/todoReducer';

import TodoForm from './TodoForm';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    
    const handleComplete = id => {
        dispatch({ type: TOGGLE_COMPLETED, payload: id })
    }
    console.log(state)
    return (
        <>
            <TodoForm dispatch={dispatch}/>
            {state.map((list) => {
                return <h2 key={list.id} 
                onClick={() => handleComplete(list.id)}
                >{list.item}</h2>
            })}
        </>
    );
};

export default TodoList;