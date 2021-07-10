import React, { useReducer, useState } from 'react';

import { reducer, initialState } from '../reducers/Reducer';
import TodoItem from './TodoItem';

// create a functional component
function TodoList() {
    // Use the useReducer hook by destructuring its two properties: state, and dispatch 
    // and pass in the reducer and the initialState to the useReducer function
    const [state, dispatch] = useReducer(reducer, initialState);

    // state hook to manage new items
    const [newItem, setNewItem] = useState(
        {   item: '',
            completed: false,
            id: Date.now()
        });

    // function to handle state when input changes
    function handleChanges(event) {
        setNewItem({...newItem, [event.target.name]: event.target.value})
    }

    // function to add todo when form is submitted
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADDITEM', payload: newItem});
        setNewItem(
            {   item: '',
                completed: false,
                id: Date.now()
            }
        )
    }

    // return JSX that maps uncompleted TodoItem components to the screen
    return (
        <div>
            <div>
                {state.map( item =>
                    <TodoItem key={item.id} item={item} dispatch={dispatch}/> 
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    name="item" 
                    placeholder="Add Todo!"
                    value={newItem.item}
                    onChange={(e) => handleChanges(e)}/>
                <button>Add</button>
            </form>
            <button onClick={() => dispatch({ type: 'CLEAR'})}>Clear Completed</button>
        </div>
    )
};

export default TodoList;