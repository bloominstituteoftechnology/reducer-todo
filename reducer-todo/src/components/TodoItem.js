import React, {useState, useReducer} from 'react';
import {initStateTodo, todoReducer} from '../reducers/TodoReducer';


const TodoItem = () => {
    const [newItem, setNewItem] = useState();
    const [todoState, dispatch] = useReducer(todoReducer, initStateTodo);
    
    const handleChanges = e => {
        setNewItem(e.target.value);
    };
    return (
        <div 
        className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={() => dispatch({type:'TOGGLE_COMPLETED'})}>
            <p>{props.item.name}</p>
        </div>
    )
}
export default TodoItem;