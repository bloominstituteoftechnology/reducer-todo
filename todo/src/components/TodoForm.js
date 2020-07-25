import React, { useState, useReducer } from 'react';
import { reducer, todo } from '../reducers/reducer';

const Todo = () => {
    
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(reducer, todo);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const Toggle = e => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: e})
    }
    
    const Clear = e => {
        dispatch({ type: "CLEAR_TODOS"})
    }

    return (
        <div>
            {state && state.map((e) => <h1 onClick={()=>Toggle(e.id)}>{e.item}</h1>)};
        

        <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={handleChanges}
        />
        <button onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodo});
        }}
        >Add Todo</button>

        <button onClick={() => {
            dispatch({ type: "CLEAR_TODOS"});
        }}>Clear</button>
        </div>
    );
};

export default Todo