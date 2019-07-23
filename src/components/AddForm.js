import React, {useState} from 'react'
import {useStateValue} from '../hooks/useStateValue'

export const AddForm = () => {
    const [input, setInput] = useState('');
    const [, dispatch] = useStateValue()

    const addItem = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: input})
        setInput('')
    }

    return (
        <div>
            <form onSubmit={(e) => addItem(e)}>
                <label>Add To-Do Item:</label>
                <input 
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input
                    type="submit"
                    onSubmit={(e) => addItem(e)}
                />
            </form>
        </div>
    )
}
