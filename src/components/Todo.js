import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import TodoList from './TodoList';

const Todo = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodoItem, setNewTodoItem] = useState ('');
    
    const handleChange = e => {
        setNewTodoItem(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log("please add", newTodoItem)
        dispatch({ type: "ADD_TODOITEM", payload: newTodoItem });
        setNewTodoItem('');
    };

    const handleDelete = e => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_DONE' });
    }

    const handleToggle = e =>{
        e.preventDefault();
        dispatch({ type: 'TOGGLE_DONE', payload: e.target.id })
    }

    return(
        <div>
            <form>
                <label htmlFor='todo'> Add Item To Do: </label>
                <input
                id='todo'
                name='todo'
                onChange={handleChange}
                value={newTodoItem}
                />
            </form>

            <button onClick={handleSubmit}>Add Item To Do</button>
            <button onClick={handleDelete}>Clear Items That Are Finished</button>
            <TodoList state={state} dispatch={dispatch} handleToggle = {handleToggle} />

        </div>
    )
}

export default Todo;
