import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer';

const TodoForm = () => {
    const [{tasks}, dispatch] = useReducer(reducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleChange = e => {
        setNewTask(e.target.value)
    };
        return(
            <form >
                <input 
                    type='text'
                    name='addTask'
                    value={newTask}
                    onChange={handleChange}
                />
                <button onClick={()=>dispatch({ type: 'ADD_TASK', payload: tasks})}>Add</button>
            </form>
        );
    }


export default TodoForm;


 