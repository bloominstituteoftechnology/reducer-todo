import React, { useState } from 'react'


const TodoForm = ({addNewTask, clearCompletedTask}) => {
    const [newTaskName, setNewTaskName] = useState('');

    const handleChanges = e => {
        setNewTaskName(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewTask(newTaskName);
        setNewTaskName('');
    }

    const handleCompletedTask = e => {
        e.preventDefault();
        clearCompletedTask();
    }

    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    placeholder="add new task"
                    value={newTaskName}
                    onChange={handleChanges}
                />
                <button type="submit">Add Task</button>
                <button onClick={handleCompletedTask}>Clear Completed</button>
            </form>
    )
};

export default TodoForm