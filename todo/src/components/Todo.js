import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer';

const Todo = () => {
    const [{ task, completed}, dispatch] = useReducer(reducer, initialState);


    return (
        <div 
            className={`task${completed ? 'completed' : ''}`}
            // onClick={() => dispatch({type: 'TOGGLE_COMPLETE'})}
        >
            <p>{task}</p>
        </div>
    );
};

export default Todo;