import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Todo = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const [newTodo, setNewTodo] = useState();

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }
    console.log(state);
    
    
    return (
        <div>
            <h1 
                onClick={() => dispatch({type: 'TOGGLE_COMPLETED'})}
                >{state.item}</h1>
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
                <button onSubmit={() => dispatch({type: 'ADD_TODO', payload: newTodo})}>Add New Todo</button>
            </form>
        </div>
    );
};

export default Todo;