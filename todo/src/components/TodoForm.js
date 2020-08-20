import React from 'react'
import "./TodoForm.css"


const TodoForm =(props)=>{

    return(
        <div>
        <form className="addForm">
           <input className="addInput" type="text" 
                  name="todo"
                  value={props.todo.task}
                  onChange={props.inputHandler}/>
            <button className="addButton" onClick={props.handleSubmit}>Add Todo</button>
            <button className="deleteButton" onClick={(e)=>{
                e.preventDefault()
                props.removeCompleted()}}>Clear Completed</button>
            </form>
           
             </div>
    )

}

export default TodoForm;
