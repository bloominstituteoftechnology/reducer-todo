import React, {useState, useReducer} from "react"
import {TodoReducer} from "../reducers/todoReducer";
import './todoForm.css';

function TodoForm() {
    const [{todo}, dispatch] = useReducer(TodoReducer, {todo: []})

    const [text, setText] = useState("")

    return (
        <div className="newForm">
            <form onSubmit={e => {
                 e.preventDefault();
                 dispatch({type: "ADD_TODO", text})
                 console.log(text)
                 setText("")
                 }}>
                <input
                    type="word"
                    placeholder="Enter A Task"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className="submit">Add A Task</button>
            </form>
            <div className="todo-list">
                {todo.map((todos, index) => (
                    <div
                    key={index}
                    onClick={() => dispatch({type: "TOGGLE_TODO", index})}
                    style={{textDecoration: todos.completed ? "line-through" : "",
                    color: todos.completed ? "blue" : "red", backgroundColor: todos.completed ?  "#0470dc": "#ffca3a", color: "white", textShadow: "1px 1px 3px black", boxShadow: "2px 2px 8px black;" }}
                    >
                        <p>{todos.text}</p>
                    </div>
                    
                ))}
                <button className="clear-btn" onClick={() => {dispatch({type:"CLEAR_TODO"})}}>Clear Completed</button>
            </div>
            
        </div>
    )
}

export default TodoForm;