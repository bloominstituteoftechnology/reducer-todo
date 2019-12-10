import React from 'react';
import {state} from '../reducers/todoReducers';


const Todo = (props) => {
    return (
        <div>
            <h1>{state.item}</h1>
            
        </div>
    )
}
export default Todo;