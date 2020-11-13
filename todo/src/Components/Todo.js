import React from "react";

const Todo = (props) =>{
    return(
        <div
        onClick={() => props.toggleTask(props.todo.id)}//setting up the onClick to toggle the task from not completed to completed
        //then we are putting those completed task into their own class so we can grey the task out
        className= {`task${props.todo.completed ?"completed" : ""}`} > 
        
        <p>{props.todo.item}</p> 
        {console.log("props",props)}
        </div>//adding the task to the page
    )
}
export default Todo;
