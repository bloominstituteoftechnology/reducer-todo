import React from 'react';
import '../../scss/todo.scss';

function Todo(props) {
    return (
    <>
        <div className="todo-box">
            <input type='checkbox' checked={props.completed} onChange={() => props.dispatch({type: 'TOGGLE-COMPLETED', id: props.id})} />Completed
            <h1>{props.item}</h1>
            <p>Date Created: {props.dateCreated} </p>  
        </div>     
    </>
    );
}
export default Todo;