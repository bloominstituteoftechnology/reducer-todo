import React from 'react'
import "./Todo.css"

const Todo =(props)=>{

         return(<div onClick={(e)=>{e.preventDefault();

            props.toggleTodo(props.toDo.todo.id)
         }}
          className={`todo${props.toDo.todo.completed ? " completed": ""}`}>
            {props.toDo.todo.task} </div>
         )
       

}

export default Todo;