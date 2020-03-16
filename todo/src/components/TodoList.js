import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log('todo list props:', props)

    return (
        <div>
            <h2>This is what you need to do today:</h2>
            {props.tasks.map(task => {
                return (
                    <Todo 
                        key={task.id}
                        id={task.id}
                        name={task.item}
                        status={task.completed}
                        toggleTask={props.toggleTask}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;