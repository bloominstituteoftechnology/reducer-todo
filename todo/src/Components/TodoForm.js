import React, { useState } from "react"



const TodoForm = (props) => {
const [newTask, setNewTask] = useState({todo:""});//setting up state for adding a new task
const initialState = {
    todo: ""
}

const handleChanges =(e) =>{
    const newTaskInput ={
        ...newTask,
        [e.target.name]:e.target.value
    }
    setNewTask(newTaskInput)
}

const handleSubmit = (e) =>{
    setNewTask(initialState);
    props.addTask(e, newTask.todo)
}

    return(
      
        <form onSubmit = {handleSubmit}>
        <input type = "text"
               placeholder = "To-do..."
               name = "todo"
               value = {newTask.todo}
               onChange = {handleChanges} />
            <button >
            Add Task
            </button>
            
            
    </form>
    
    )
}
export default TodoForm;