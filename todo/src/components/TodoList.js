import { todoReducer } from "../reducers/TodoReducer";
import actions from '../actions/TodoActions';
import React, { useReducer, useState } from 'react';

export default function Todo() {

    const initialState = [
        {
            item: '',
            completed: false,
            id: Date.now(),
        },
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

            <input
                className='todo-input'
                placeholder="Add new task..."
                type='text'
                name='newTodo'
                value={newTodo}
                onChange={handleChanges}/>
            
            <button onClick={() => dispatch(actions.addTodo(newTodo))}>
            Add
            </button>
            
            {console.log(state)}
            {state.map(todo => {
                console.log(todo)
                return(
                    <p key={todo.id} onClick={() => dispatch(actions.toggleCompleted(todo.id))}>
                    {todo.item}
                    </p>
                )
            })}

            <button onClick={() => dispatch(actions.clearCompleted())}>
            Clear Completed
            </button>
        </div>
    )
}

