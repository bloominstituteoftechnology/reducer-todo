import React, { useState } from 'react';

const TodoForm = (props) => {
    console.log('from TF', props);
    const [task, setTask] = useState('');

    const handleChanges = e => {
        console.log('from TForm HC', e.target.value);
        setTask({ task: e.target.value });
    };
    const AddTask = (e, taskName) => {
        e.preventDefault();
        setTask({
            ...task,
            item: taskName
        })
    }
    return (
        <form>
            <input
                type='text'
                name='item'
                placeholder='Add Task'
                onChange={handleChanges}>
            </input>
            <button
                onClick={() => {
                    props.dispatch({ type: 'ADD_TASK', payload: task })
                }}>
                Add Task
            </button>
        </form>
    )
};

export default TodoForm;