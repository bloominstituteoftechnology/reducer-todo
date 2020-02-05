import React from "react";

 export const TodoForm = ( props) => {
     console.log("props from TodoForm", props)
     
      return (
        <form 
            className = "addTaskInput"
            onSubmit = {props.handleSubmit}>

            <input 
                type = "text"
                name = "task"
                placeholder = "Add new task"
                onChange = {props.handleChanges}/>

            <div className = "buttons">
                <button  
                    type="submit"
                    onClick={() => props.dispatch({ type: "CREATE_TODO", payload: props.newTodo })}>
                    Add new task
                </button>

                <button onClick={() => props.dispatch({ type: "CLEAR_COMPLETED"})}>
                    Clear Completed
                </button>
            </div>
        </form>
      )
}