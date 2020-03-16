import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Todo = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const [newTodo, setNewTodo] = useState();


    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    const addNewTodo = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: newTodo});
    }
    
    
    return (
        <div>
            {state.todos.map(elem => (
                 <h1 
                 key={elem.id}
                 onClick={() => dispatch({type: 'TOGGLE_COMPLETED'})}
                 className={state.completed ? 'completed' : ''}
                 >{elem.item}</h1>
            ))}
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
                <button onClick={addNewTodo}>Add New Todo</button>
                <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
        </div>
    );
};

export default Todo;