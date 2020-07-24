import React,{useEffect, useState} from 'react'


const ToDoItem = (props) => {

    return (
        <div onClick={() => {props.dispatch({type:'IS_COMPLETE', payload:props.toDo})}}>
            
            <h1 className={props.toDo.completed === true?'lineThru':'none'}>

            {props.toDo.item}
            </h1>
        </div>
    )
}

export default ToDoItem 