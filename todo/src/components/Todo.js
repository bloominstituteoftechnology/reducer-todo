import React from 'react';

export const Todo=((props)=>{
return( <div>
    <p 
    // className={`task${!props.task.completed ? 'completed' : ''}`}
    onClick={()=>props.toggled(props.task.id)}>
        {props.task.todo}
    </p>
</div>)

})