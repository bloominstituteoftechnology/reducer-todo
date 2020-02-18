import React from 'react';

const Todo = (props) =>{
    return(
        <div>
           <li onClick={()=> props.toggleItem(props.item.id)} className={`item${props.item.completed ? ' completed': ''}`}>
               {props.item.task}
           </li>
        </div>
    )
}

export default Todo;