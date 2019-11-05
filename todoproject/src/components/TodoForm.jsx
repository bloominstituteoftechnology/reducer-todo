import React, { useState } from 'react';

const TodoForm = () => {
    const [inputText, setInputText] = useState('')

    const handleChanges = event => {
        setInputText(event.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor='todo'>Enter Todo</label>
                <input 
                id='todo'
                type='text'
                name='todo'
                value={inputText}
                onChange={handleChanges}
                />
            </form>
        </div>
    )
}

export default TodoForm;