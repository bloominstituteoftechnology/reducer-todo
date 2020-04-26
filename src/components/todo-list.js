import React from 'react';
import '../App.css';

const ToDoList = (props) => {
    console.log (props)
    const handleToggle = (id) => {
        props.dispatch({type: "COMPLETED", id: id})
    }

    return(
        <div>
            {props.state.map(todo => {
                return (
                    <div key={todo.id} 
                    className={`todo ${todo.completed ? "completed" : ""}`}
                    onClick={() => handleToggle(todo.id)}>
                    <p>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ToDoList;