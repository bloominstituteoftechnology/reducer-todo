import React, {useState, useReducer} from 'react';


const TodoForm = ({dispatch}) => {
    
    const [newTask, setNewTask] = useState();
    

    const handleChange = e => {
        setNewTask(e.target.value)
    };

    const submitTask = e =>{
        e.preventDefault();
    }

    console.log('Adding: ', newTask);
    
        return(
            <form onSubmit={submitTask}>
                <input 
                    type='text'
                    name='task'
                    value={newTask}
                    onChange={handleChange}
                />
                <div>
                    <button onClick={()=> dispatch({type: 'ADD_TASK', payload: newTask})}>Add</button>

                    <button onClick={()=> dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
                </div>
            </form>
        );
    }


export default TodoForm;


 