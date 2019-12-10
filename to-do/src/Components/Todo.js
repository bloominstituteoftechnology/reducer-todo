import React from 'react';
import {state} from '../reducers/todoReducers';


const Todo = (props) => {
    return (
        <div>
            <h1>{state.item}</h1>
            <button onClick>test</button>
        </div>
    )
}
export default Todo;