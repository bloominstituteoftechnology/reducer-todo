import React from 'react';
import Todo from './Todo';


const TaskList = (props) => {

    return (
        <div className='task-map'>
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
    ))}

            <button className='clear-btn' onClick={e => props.clearTask()}>Clear completed tasks</button>

            </div>

    )
}


export default TaskList;