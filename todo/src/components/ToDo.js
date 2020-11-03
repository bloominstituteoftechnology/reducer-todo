import React, {useReducer} from 'react'

const taskList = [
    {
        task: 'Learn Redux',
        id: 1,
        completed: false
    },
    {
        task: 'Get a car',
        id: 2,
        completed: false
    }
]

const task = () => {
const initialState = {
    input: ''
}

    return (
        <div>
            <form>
                <label>
                    Enter a task:
                    <input 
                    type='text'
                    name='todo'
                    value={initialState.input}
                    />
                </label>
                <button>Add task</button>
            </form>
        </div>
    )
}

export default ToDo
