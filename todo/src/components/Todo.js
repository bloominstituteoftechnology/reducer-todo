import React from 'react'

const Todo = props => {

    return (
<div>
<div onClick={() => props.onToggle(props.task.id)}
 className={props.task.completed ? "completed" : true
}>
<p>{props.task.task}</p>
</div>
</div>
    )
}

export default Todo;