import React, { useState, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { toDoReducer, initialState } from '../reducers';


const Todo = ({todo, handleToggleTodo}) => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    const [taskID, setTaskID] = useState(todo.id);

    return(
    <li
    onClick= {() => handleToggleTodo(todo.id)}
    style={{textDecoration: todo.complete ? 'line-through' : 'none'}}
    >
        {todo.name}
    </li>
)}

export default Todo