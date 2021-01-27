import React, { useReducer } from 'react';
import todoReducer, { initialState } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
        const task = state.item
    return (
        <>
            {/* {task.map((item) => {
                <h2>{item}</h2>
            })} */}
        </>
    )
};

export default TodoList;