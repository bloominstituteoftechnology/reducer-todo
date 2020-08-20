import React from "react";

const Todo = ({todo}) => {
    return (
        <div className="Todo">
            <p className="TodoText">{todo.task}</p>

            <div className={`todo${todo.task.completed ? ' completed' : ''}`}
            onClick={() => todo.toggleTask(todo.task.id)} />
        </div>
    );
}

export default Todo;