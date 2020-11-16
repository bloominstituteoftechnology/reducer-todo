import React from "react"
import Todo from "./Todo"


const TodoList = (props) =>{

    return(
        <div className="todo-list">
        <h1>   
           {props.todolist.map((i) =>{
            //    return <p>{i.item} </p>
            return <Todo
            dispatch={props.dispatch}
            key={i.id}
            item={i.item}
            // toggleDone={props.toggleDone}
            // clearTodos={props.clearTodos}
          />
           })}{" 😭 ⌛ ⛺ "}
               <i
                   className="far fa-edit"
                   onClick={() => { 
                       // props.dispatch({ type: !TOGGLE_DONE });
                   }}
               />
       </h1>



</div>
    )


}
export default TodoList
