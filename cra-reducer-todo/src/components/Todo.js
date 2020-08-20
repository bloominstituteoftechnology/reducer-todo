import React from  'react';
import './Todo.css'


const Todo = (props) => {
    console.log(props)
    return (
        <div onClick={()=>props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.todo.id })} className={`task${props.todo.completed ? 'completed' :''}`}
        >
            <p>{props.todo.item}</p>
        </div>
    )
}

export default Todo