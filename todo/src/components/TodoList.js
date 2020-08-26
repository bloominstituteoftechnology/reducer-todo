import React from 'react';
import Todo from './Todo'

const taskList = (props) => {
    console.log(props.state)
    return(
        
        <div className='todoList'>
            {props.state?.data?.map(todo => {
                return <Todo
                key={todo.id} 
                dispatch={props.dispatch}
                todo={todo}
                />
                })}
            <button className='clear-btn' onClick={()=> props.dispatch({type: "CLEAR_FINISHED"})}>
            Clear Todo List
            </button>
        </div>
    );
};

export default taskList;