import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '.'

function Todo() {

const [todo, setTodo] = useState();
const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <form onSubmit={handleSubmit}>
               <input 
               type='text'
               name='todo'
               placeholder='Add Todo'
               value={todo}
               onChange={handleChanges} />

            </form>
        </div>
    )
}