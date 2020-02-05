import React, {useReducer} from "react";
import { initialTodos, toDoReducer } from "./reducers/todoReducer";
import Todo from "./Todo";

export default function TodoList() {
    const [todos, dispatch] = useReducer(toDoReducer, initialTodos);
    console.log(todos);

    const toggleCompleted = e => {
        dispatch({ type: "TOGGLE_COMPLETED" });
      };

    return(
        <div className="todo-list">
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todos={todo}
                    toggleCompleted={toggleCompleted}
                    newTask={newTask}
                    />
            ))}
            <button className="clear-btn">
                    Clear Completed
                </button>
        </div>
    )
}
