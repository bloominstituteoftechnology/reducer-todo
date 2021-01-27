import React, { useReducer } from 'react';
import todoReducer, { initialState } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            {state.map((list) => {
                return <h2>{list.item}</h2>
            })}
        </>
    );
};

export default TodoList;