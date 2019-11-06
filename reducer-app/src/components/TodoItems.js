import React from "react";
import styled from 'styled-components'

const TodoDiv = styled.div`
height: 300px;
width: 400px;
background: rgb(31,121,100);
`

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