import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer'

const TodoForm = (props) => { 
    const [newTodo, setNewTodo] = useState('');
    const handleChange = e => {
        setNewTodo( e.target.value)
    };

    const submitTodo = e => {
        e.preventDefault();
        props.dispatch({type: "ADD_TODO", payload: newTodo});
        setNewTodo('')
    };

   
        return (
            <form onSubmit={submitTodo}>
                <input
                    type='text'
                    name='todo'
                    value={newTodo}
                    onChange={handleChange}
                />
                <button onClick={submitTodo}>Add</button>
            </form>
        )
    
}

export default TodoForm;