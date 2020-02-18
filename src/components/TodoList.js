import React, { useReducer } from 'react';

const TodoList = ({ state, dispatch, handleToggle }) => {

    return(
        <div>
            {state.map(todo =>{
                return <p className={`$todo.completed ? 'all done' : ''}`}
                id={todo.id} onClick={handleToggle}> 
                Item To Do: {todo.item} Finished: {String(todo.completed)}</p>
            })}
        </div>
    )
};

export default TodoList;