import React, {useState, useReducer} from 'react';


const TodoForm = ({dispatch}) => {
    
    const [newTask, setNewTask] = useState();
    const handleChange = e => {setNewTask(e.target.value)};
    const submitTask = e =>{e.preventDefault()}
    
        return(
            <form onSubmit={submitTask}>
                <input 
                    type='text'
                    name='task'
                    value={newTask}
                    onChange={handleChange}
                />
                <button onClick={()=> dispatch({type: 'ADD_TASK', payload: newTask})}>Add</button>
            </form>  
        );
    }


export default TodoForm;


 