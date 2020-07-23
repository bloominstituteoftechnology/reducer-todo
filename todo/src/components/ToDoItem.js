import React,{useEffect, useState} from 'react'


const ToDoItem = (props) => {

    const [completed,setCompleted] = useState(props.toDo.completed)

    return (
        <div onClick={() => {props.dispatch({type:'IS_COMPLETE', id:props.toDo.id, completed:props.toDo.completed})}}>
            
            <h1 className={completed === true?'lineThru':'none'}>

            {props.toDo.item}
            </h1>
        </div>
    )
}

export default ToDoItem 