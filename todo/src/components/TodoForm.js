import React, {useState, useReducer} from "react";
import {reducer, initialState} from "../reducers/reducer";

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setnewTodo] = useState("");

    const handleChanges = event => {
        setnewTodo(event.target.value);
    }

    const clearTask = event => {
        event.preventDefault();
    }

    const addTodo = event => {
        event.preventDefault();
        dispatch({
            type: "UPDATE_TODO",
            payload: {item: newTodo, completed: false}
        })
        setnewTodo('');
    }

    return (
        <div>
            <form className="form-box">
                <input className="input" type="text" name="todo" onChange={handleChanges} />
            </form>
            <button onClick={addTodo} className="btn">Add Task</button>
            <button className="btn">Clear Task</button>
        </div>
    )
}