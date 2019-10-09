import React from 'react';
import Todo from './Todo';

const TodoList = ({state, dispatch}) => {
    console.log('TodoList:', state)

    return (
        <div className='todo-list'>
            {state.tasks.map(task=>(
                <Todo key={task.id} task={task}
                dispatch={dispatch}/>
            ))}
        </div>
    )
};

export default TodoList;