import React from 'react';
import { Todo } from './Todo';


export const TodoList=((props)=>{
    // console.log(props.todoItems)
return(        
<div>
    {props.todos.map(task=>(
        <Todo key={task.id} task={task} toggled={props.toggled}/>
    ))}
</div>
)})