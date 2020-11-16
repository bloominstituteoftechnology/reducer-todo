import React from "react"
import Todo from "./Todo"


const TodoList = (props) =>{

    <div className="todo-list">
                 <h1>
                    {props.state.item}{" 😭 ⌛ ⛺ "}
                        <i
                            className="far fa-edit"
                            onClick={() => { 
                                // props.dispatch({ type: !TOGGLE_DONE });
                            }}
                        />
                </h1>
        <Todo/>
    </div>


}
export default TodoList
