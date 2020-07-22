import React, { useReducer, useState } from 'react';
import { TodoReducer, initialState } from '../reducers/TodoReducer';

const TodoForm = () => {
    const [newTask, setNewTask] = useState('');
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    // addTask = taskName => {
    //     setState({
    //         tasks: [
    //             ...tasks,
    //             {
    //                 item: taskName,
    //                 id: Date.now(),
    //                 completed: false
    //             }
    //         ]
    //     });
    // };

    return (
        <form>
            <input
                type='text'
                name='task'
                value=''>
            </input>
            <button
                onClick={() => {
                    dispatch({ type: 'ADD_TASK', payload: newTask });
                }}>
                Add Task
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'CLEAR_COMPLETED' })
                }}>
                Clear Completed
            </button>
        </form>
    )
};

export default TodoForm;