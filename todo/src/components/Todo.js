import React from 'react';
import './Todo.css'

const Todo = (props) =>{
    return(
    <div className="task">
    <h3
        className={`item${props.item.completed ? 'completed' : ''}`}
        onClick={(e)=>{
            e.preventDefault(); 
            props.toggleComplete(props.item.id);}}
    >{props.item.task}</h3>
    </div> 
    )
    
}


export default Todo