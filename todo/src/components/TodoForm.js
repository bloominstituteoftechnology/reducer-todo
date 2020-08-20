import React, { useState } from 'react';

const TodoForm = ({ addNewTask, filterTasks }) => {
    //console.log('to do form props', props)

    const [newTaskName, setNewTaskName] = useState('');

    const handleChanges = e => {
        setNewTaskName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        addNewTask(newTaskName);
        setNewTaskName('');
    }

    const handleClearCompleted = e => {
        e.preventDefault();
        filterTasks();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newTask"
                    placeholder="What do you need to do today?"
                    value={newTaskName}
                    onChange={handleChanges}
                />
                <div>
                    <button type="submit">Add a New Task</button>
                    <button type="button" onClick={handleClearCompleted}>Clear Your Completed Tasks</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;