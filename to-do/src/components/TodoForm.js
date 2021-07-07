import React, {useState} from 'react';

function TodoForm({addTodo, clearCompleted}) {
    const [input, setInput] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        addTodo(input);
        setInput('');
    }

    const clearCompletedHandler = (e) => {
        e.preventDefault();
        clearCompleted()

    }
    return (
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                type='text'
                name='todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Submit</button>
                <button onClick={(e) => clearCompletedHandler(e)}>Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;