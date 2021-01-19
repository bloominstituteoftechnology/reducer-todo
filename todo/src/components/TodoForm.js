import React, { useState} from 'react'

const TodoForm = ({setTask, clearChecked}) => {
    const [newTask, setNewTask] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        setTask(newTask)
        setNewTask('')
    }

    const handleChanges = (e) => {
       setNewTask(e.target.value)
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
            <input 
                className="todo-input"
                type='text'
                name='task'
                placeholder='Add A Task'
                value={newTask}
                onChange={handleChanges}
            />
            <button>Add Task</button>
            <button onClick={clearChecked}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm
