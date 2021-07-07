import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';

function Form({ addTodo }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <form>
            <input 
                placeholder='Enter Your Todo...'
                value={state.inputValue}
            />
            <button type='submit' onClick={addTodo}>Submit</button>
        </form>
    )
}

export default Form;