import React from "react";

const Task = props => {
    return(
        <TodoDiv className={`task ${props.task.completed ? 'completed' : ''}`}
        onClick={()=> props.toggleTask(props.task.id)}>
            <p>{props.task.name}</p>
        </TodoDiv>
    )
}


const TodoList = props => {

    return(
        <TodoDiv> 
            {props.tasks.map(task=>(
                <Task key={task.id} task={task} toggleTask={props.toggleTask}/>
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>

            
        </TodoDiv>
    );
};

export default TodoList;