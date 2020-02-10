import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './reducers/reducer';

const Todo = props => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const[newTodo, setNewTodo] = useState('');

    const handleAddTodo = event => {
        dispatch({type: 'ADD_TODO', payload: newTodo });
    };

    const handleChanges = event => {
        setNewTodo(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    };

    const handleComplete = event => {
        dispatch({ typle: 'TOGGLE_COMPLETE' })
    };

    return (
        <div>
                    {state.map((item) => {
                        return <h2><button onClick={handleComplete}>{item.item}</button></h2>
                    })}

            <form onSubmit={handleSubmit}>
                <input name='new-todo' type='text' value={newTodo} onChange={handleChanges} />
                <button onClick={handleAddTodo}>Add New Item</button>
            </form>
        </div>
    )
};

export default Todo;