
import React from 'react';

export const Todo=(props)=>{


// console.log(props.task.id)
return (
    <div>
        <p onClick={()=>props.toggled(props.task.id)}>
            {props.task.item}
        </p>
    </div>
    )
}
