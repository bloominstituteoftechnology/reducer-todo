import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Todo = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const [newTodo, setNewTodo] = useState([]);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }
    console.log(state);
    
    
    return (
        <div>
            {state.todos.map(elem => (
                 <h1 
                 key={elem.id}
                 onClick={() => dispatch({type: 'TOGGLE_COMPLETED'})}
                 className={state.completed ? 'completed' : ''}
                 >{elem.item}</h1>
            ))}
            <form>
                <label htmlFor='todo'>Todo:
                    <input 
                        id='todo' 
                        name='todo' 
                        type='text' 
                        placeholder='New Todo' 
                        value={newTodo}
                        onChange={handleChanges}
                        />
                </label>
                <button onClick={() => dispatch({type: 'ADD_TODO', payload: newTodo})}>Add New Todo</button>
                <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
            </form>
        </div>
    );
};

export default Todo;