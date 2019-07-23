import React, {useState} from 'react'
import {useStateValue} from '../hooks/useStateValue'

export const AddForm = () => {
    const [input, setInput] = useState({todo: '', deadline: '2019-07-23'});
    const [, dispatch] = useStateValue()

    const addItem = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: input})
        setInput({todo: '', deadline: '2019-07-23'})
    }

    return (
        <div>
            <form onSubmit={(e) => addItem(e)}>
                <label>Add To-Do Item:</label>
                <input 
                    type='text'
                    name='todo'
                    required
                    value={input.todo}
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                />
                <label>Completion Deadline</label>
                <input
                    type="date"
                    name='deadline'
                    value={input.deadline}
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                />
                <input
                    type="submit"
                    onSubmit={(e) => addItem(e)}
                />
            </form>
        </div>
    )
}
