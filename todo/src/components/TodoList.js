import React, { useReducer } from "react";
import { TodoReducer, initialState } from "../reducers/reducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    console.log(state);

    return (
        <div>
            {state.todos.map(todo => {
                console.log(todo)
                return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
            })}
            <TodoForm dispatch={dispatch} />
            {/* What is the point of dispatch={dispatch}? */}

        </div>

    )
}

export default TodoList;