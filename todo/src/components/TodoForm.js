import React, { useState, useReducer } from 'react';
import { TodoReducer, initialState } from './reducers/TodoReducer';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    // const AddTask = (e, taskName) => {
    //     e.preventDefault();
    //     setTask({
    //         ...state,
    //         item: taskName
    //     })
    // }
    return (
        <form>
            <input
                type='text'
                name='task'
                placeholder='Add Task'>
            </input>
            <button
                onClick={() => {
                    dispatch({ type: 'ADD_TASK', payload: task });
                }}>
                Add Task
            </button>
        </form>
    )
};

export default TodoForm;