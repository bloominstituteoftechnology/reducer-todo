import React, {useState} from 'react'

const TodoForm = ({setTodo, doneTodo}) => {
    const [todoInput, setTodoInput] = useState('');

    const handleChange = e => {
        setTodoInput(e.target.value)
    }

    const todoSubmit = e => {
        e.preventDefault()
        setTodo(todoInput);
        setTodoInput('')
    }

    return (
        <div>
            <form onSubmit = {todoSubmit}>
            <input 
            className = 'todo-text'
            type = 'text'
            name = 'todo'
            onChange = {handleChange}
            placeholder = 'Put a Todo Here'
            value = {todoInput}
            >
            </input>
            <button>Add Todo</button>
            <button onClick={doneTodo}>Clear Finished Tasks</button>
            </form>
        </div>
    )
}

export default TodoForm;