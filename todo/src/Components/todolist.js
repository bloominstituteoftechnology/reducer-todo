// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

// import Todo from './Todo'

// import {initialList, reducer} from '../reducers/reducers'

// import './Todo.css'

const TodoList = props => {

    // console.log("stateeeeeeeeeeeee",state)
    return (
        <div className="todo-list">
            {props.info.todo.map(todo => {
                 return(   
                    <div 
                    key={todo.id}
                    onClick={()=>{props.toggleItem(todo.id)}}
                    className={`todo${todo.completed ? "completed" : ""}`}>
                <p >{todo.task}</p>
                </div>  )
              
            })}
        </div>
    )
}
export default TodoList