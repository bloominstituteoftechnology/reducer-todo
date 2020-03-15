import React from 'react';

const TodoForm = () => {
    return (
        <div>
            <p>this is the form</p>
            <form>
                <input
                    type="text"
                    name="newTask"
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm;