import React, { useState } from "react";
import "../../src/App.css"

const TodoForm = ({ addTodo, clearCompleted }) => {
    const [todoInput, setTodo] = useState('');


    const handleChanges = (e) => {
        setTodo(e.target.value);
    };
       
const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput);
}
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoInput}
                name="task"
                onChange={handleChanges}
            />
            <button type="submit">Add Task</button>
            <button className="clear-completed" onClick={clearCompleted}>Delete Task</button>
        </form>
    )
}
export default TodoForm