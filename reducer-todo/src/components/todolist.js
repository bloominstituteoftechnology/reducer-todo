import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { toDoReducer, initialState } from '../reducers';
import Todo from './todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    const [newTodo, setNewTodo] = useState("")
    
    const handleAddTodo = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newTodo});
        setNewTodo("");
        console.log(state);
    };

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const handleToggleTodo = complete =>{
        dispatch({type: 'TOGGLE_TODO'});
        console.log('hi', complete);
    };
    return (
        <div>
            {state.map(todo => 
                <Todo
                key={todo.id}
                name={todo.name}
                onClick= {handleToggleTodo}
                />
            )}
            <input
            className="todoInput"
            type="text"
            name="newTodoText"
            value={newTodo}
            onChange={handleChanges}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
};

export default TodoList;
