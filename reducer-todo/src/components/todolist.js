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

    const handleToggleTodo = (id) => {
        dispatch({ type: 'TOGGLE_TODO', id: id});
        console.log('hi');
    };

    const handleRemoveComplete = () => {
        dispatch({type: 'REMOVE_COMPLETE'})
        console.log('click!');
    }


    return (
        <div>
            {state.map(todo => 
                <Todo
                key={todo.id}
                name={todo.name}
                state={state}
                complete={todo.complete}
                todo={todo}
                handleToggleTodo={handleToggleTodo}
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
            <button onClick={handleRemoveComplete}>Remove Completed Items</button>
        </div>
    )
};

export default TodoList;
