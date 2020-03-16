import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    //console.log('todo list props:', props)
    const getCompletedTasks = () => {
        return props.tasks.filter(task => task.completed)
    }

    const getIncompleteTasks = () => {
        return props.tasks.filter(task => !task.completed)
    }

    return (
        <div className="task-panel">
            <h2>Your Tasks</h2>
            <p>You have {`${getIncompleteTasks().length}`} tasks to work on.</p>
            <div className="incomplete-list">
                {getIncompleteTasks().map(task => {
                    return (
                        <Todo 
                            key={task.id}
                            id={task.id}
                            name={task.item}
                            status={task.completed}
                            date={task.date_completed}
                            toggleTask={props.toggleTask}
                        />
                    )
                })}
            </div>
            <div className="complete-list">
                {getCompletedTasks().map(task => {
                    return (
                        <Todo 
                            key={task.id}
                            id={task.id}
                            name={task.item}
                            status={task.completed}
                            date={task.date_completed}
                            toggleTask={props.toggleTask}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList;