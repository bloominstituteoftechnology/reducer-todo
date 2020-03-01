import React, {useState} from 'react';

function TodoForm({addTodo, clearCompleted}) {
    const [input, setInput] = useState('')
    return (
        <div>
            <form onSubmit={() => addTodo()}>
                <input
                type='text'
                name='todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Submit</button>
                <button onClick={() => clearCompleted()}>Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;