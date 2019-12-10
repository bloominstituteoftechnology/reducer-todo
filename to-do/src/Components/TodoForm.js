import React, {useState, useReducer} from 'react';
import {state, reducer} from '../reducers/todoReducers';
const TodoForm = () => {
    const [todo, setTodo] = useState();
    const [state, dispatch] = useReducer(state, reducer),
    return (
        <div>
            <form>
                <label>Creat new Todo</label>
                        <input
                        id='todo'
                        type='text'
                        name= 'todo'
                        
                        
                        
                        />         
            </form>
        </div>
    )
}
export default TodoForm;