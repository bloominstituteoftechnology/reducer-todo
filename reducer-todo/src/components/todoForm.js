import React, { useReducer, useState } from 'react';
import { listReducer, initialState } from "./../reducers/listReducer";
import Todo from "./todo";

const TodoForm = () => {

    const [state, dispatch] = useReducer(listReducer, initialState);
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="todo">Add Todo: </label>
                <input
                    id="todo"
                    name="todo"
                    type="text"
                    value={todo}
                    onChange={handleChange}
                ></input>
                <button onClick={() => dispatch({ type: "ADD-TODO, payload: todo" })}>Add</button>
            </form>
            <Todo state={state} />
        </div>
    );
}

export default TodoForm;