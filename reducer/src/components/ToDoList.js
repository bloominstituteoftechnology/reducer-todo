import React from 'react';


export default function ToDoList(props){
    const complete = event =>{
        event.preventDefault();
        props.dispatch({type:'CHECK_COMPLETED', payload: event.target.id})
    }
    return(
        <div className='doneParent'>
            {props.state.map(todo =>{
                return <p  className={`${todo.completed ? 'done' : ''}`}
                id={todo.id} onClick={complete}>{todo.item}</p>
            })}
        </div>
    )
}