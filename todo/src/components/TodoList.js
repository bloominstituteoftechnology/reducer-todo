import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer"

function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="todoList">
          <h1>{state.item}</h1>
        </div>
    )

}

export default TodoList;