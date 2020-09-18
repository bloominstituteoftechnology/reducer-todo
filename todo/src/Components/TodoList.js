
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.list.map((todo) => (
                <Todo key ={todo.id} todo ={todo} toggleTask ={props.toggleTask} />
            ))}

            <button onClick = {props.clearTask}>
                Clear Task
            </button>
        </div>
    )
}

export default TodoList; 
