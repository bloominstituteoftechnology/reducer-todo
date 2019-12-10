import React, { useState } from 'react';


const TodoForm = () => {
    const [input, setInput] = useState('')
    const handleChange = e => {
        setInput(e.target.value);
    }

    return(
    <div>
    <form>
    <label>Todo</label>
    <input 
    id='todo'
    type='text'
    name='todo'
    value={input}
    onChange={handleChange}
    />
</form>
</div>
    )
};

export default TodoForm;