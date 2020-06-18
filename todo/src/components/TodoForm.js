import React, {useState} from "react";

const TodoForm = (props) => {
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

        })
    }

    return (
        <div>
            <form className="form-box">
                <input className="input" type="text" name="todo" onChange={handleChanges} />
            </form>
            <button className="btn">Add Task</button>
            <button className="btn">Clear Task</button>
        </div>
    )
}