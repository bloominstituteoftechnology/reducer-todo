import React, { useReducer } from 'react';

const TodoList = ({ state, handleToggle, dispatch }) => {

    return(
        <div>
            {state.map(todo =>{
                return <p className={`$todo.completed ? 'all done' : ''}`}
                id={todo.id} onClick={handleToggle}> 
                Item To Do: {todo.item} 
                Finished: {todo.completed}</p>
            })}
        </div>
    )
};

export default TodoList;