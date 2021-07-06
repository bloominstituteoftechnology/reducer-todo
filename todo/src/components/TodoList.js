import React, {useReducer} from "react";
import {reducer, todo} from "../reducers/reducer";
import {Todo} from "./Todo";
import {TodoForm} from "./TodoForm";

export const TodoList = () => {
    // ### STEP 2 - Set up state in your component
    // - Using the `reducer` hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
    const [state, dispatch] = useReducer(reducer, todo);

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                        />
            })}
        </div>
    )
}
