import React from 'react';
import Task from '../TodoComponents/Todo.js';


const TodoList=props=>{
    return (
        <div className='Todo-List'>
            {props.todos.map(task=>(
                <Task key={task.id} task={task} toggleToDo={props.toggleToDo}/>
            ))}
            <button className='clear-form' onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    );
};

export default TodoList;