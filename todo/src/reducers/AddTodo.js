import React, { useReducer } from 'react';
import { reducer, initialState } from './Reducer';

export default function Add(){

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h1 className='to-do-list'>
                To Do List: 
            </h1>
                
            {state.map(todo => 
                <p key={todo.id}>
                    {todo.item}
                </p>
            )}
            
            <button
                onClick={() => dispatch({ type: 'add' })}>
                Add
            </button>
        </div>
    )
}