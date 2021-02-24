import { todoReducer } from "../reducers/TodoReducer";
import { addTodo } from '../actions/TodoActions';
import React, { useReducer, useState } from 'react';

export default function Todo() {

    const initialState = [
        {
            item: 'Clean house',
            completed: false,
            id: new Date(),
        },
        {
            item: 'Walk dog',
            completed: false,
            id: Date.now(),
        }
    ];
    
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    return(
        <div>
            <h1 className='to-do-list'>
                To Do List: 
            </h1>

            {console.log(state)} 
            
            {state.map(todo => 
                <p key={todo.id}>
                    {todo.item}
                </p>
            )}

            <input
                className='todo-input'
                placeholder="Add new task..."
                type='text'
                name='newTodo'
                value={newTodo}
                onChange={handleChanges}
            />
            
            <button
                onClick={() => dispatch({ type: 'ADD_TODO', payload: newTodo })}>
                Add
            </button>
        </div>
    )
}

