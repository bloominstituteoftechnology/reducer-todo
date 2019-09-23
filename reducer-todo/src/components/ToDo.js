import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducers';

const ToDo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(initialState, todoReducer);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            <form>
                <label>To Do: 
                    <input 
                        type="text"
                        name="newTodo"
                        value={newTodo}
                        onChange={handleChanges}
                    />
                </label>
                </form>
                {state.item}
                <div>
                <button onClick={e => {
                    dispatch({type: "ADD_TODO", payload: newTodo});
                }}>Add ToDo</button>
                <button onClick={e => {
                    dispatch({type: "DELETE_TODO"})
                }}>
                    Remove ToDo
                </button>
                </div>
            
        </div>
    )

}

export default ToDo;