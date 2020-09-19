import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.data.map((todo) => ( 
                <Todo key={todo.id} todo = {todo} toggleTask = {props.toggleTask} />
            ))}
            <button onClick = {props.clearTask}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList; 
