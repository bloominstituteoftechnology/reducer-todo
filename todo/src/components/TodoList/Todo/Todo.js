import React from 'react';
import './scss/todo.scss';

function Todo(props) {
    return (
    <>
        <div className="todo-box">
            <p>Todo</p>
            <input type='checkbox' checked={props.completed} onChange={() => props.dispatch({type: 'TOGGLE-COMPLETED', id: props.id})} />Completed
            <p>{props.item}</p>
            <p>date created </p>  
        </div>     
    </>
    );
}
export default Todo;