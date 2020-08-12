import React from 'react'; 


export const TodoCard = ({ todo, dispatch }) => {
     

    return (
        <div onClick={() => {dispatch({type: 'TOGGLE_COMPLETED', payload: todo.id})}}
        className={ !todo.completed ? "todo-card" : "todo-card completed"}>
            <h3>{todo.task}</h3>
        </div>
    )
}
