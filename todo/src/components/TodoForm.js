import React, { useState } from 'react'


const TodoForm = ({addNewTask}) => {
    const [newTaskName, setNewTaskName] = useState('');

    const handleChanges = e => {
        setNewTaskName(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewTask(newTaskName);
        setNewTaskName('');
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
            </form>
    )
};

export default TodoForm