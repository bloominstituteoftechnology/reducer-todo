import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/Reducers';

export default function Todo() {

const [todo, setTodo] = useState();
const [state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = e => {
        setTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setTodo("");
        dispatch({ type: "ADD_TODO", payload: todo })
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
               <input 
               type='text'
               name='todo'
               placeholder='Add Todo'
               value={todo}
               onChange={handleChanges} />
               <button type='submit'>Save</button>
            </form>
            {state.addTodo.map(item => (
                <div
                key={item.id}
                item={item}
                onClick={() => dispatch({ type: 'TOGGLE_EDITING', payload: item })
             }
                > 
                    <h1>{item.item}</h1>
                    <input type='checkbox'
                    value={item} />
                    {console.log(item)}
                </div>
            )) }

            <button className='clear-btn' onClick={() => dispatch({ type: 'CLEAR_COMPLETED' }) } >
                Clear
            </button>
        </div>
            
    )
}