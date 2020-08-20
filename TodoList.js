import React from "react"
import Todop from "./Todop"
const TodoList = props =>{
    return (
        {props.todo.map(item => (
            <Todop
            key={item.id}
            item ={item}
            toggleCompleted={props.toggleCompleted}
            />
        ))}
    }


}
export default TodoList