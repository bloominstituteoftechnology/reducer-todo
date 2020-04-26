import React, { useState, useReducer } from 'react';
import { Reducer, initialState } from '../reducers/reducer';
import ToDoList from './todo-list'

const TodoForm = () => {
    const [ state, dispatch ] = useReducer(Reducer, initialState);
    console.log(state, dispatch);
    const [ todo, setTodo ] = useState('');

    const handleChange = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD-TODO", payload: todo})
    }

    const handleClear = e => {
        e.preventDefault();
        dispatch({ type: " REMOVE", payload: todo})
    }

    console.log(state)
    return (
        <div className="form">
            <form>
                <input 
                    type="text"
                    id="todo"
                    name="todo"
                    value={todo}
                    onChange={handleChange}
                    />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={handleClear}>Clear Completed Items</button>
            </form>
            <ToDoList id={state.id} todo={todo} dispatch={dispatch} state={state} />
        </div>
    )
}

export default TodoForm;