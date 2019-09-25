import React from 'react'

//sets the actual Todo.
//{todo, dispatch} todo here DOES NOT come from TodoForm useState. This is our own variable.
//payload is set to id in order to compare back in the todoReducer if completed or not. 
export default function Todo({todo, dispatch}) {
    const completedTodo = (e) => {
        dispatch({
            type: 'TODO_COMPLETE',
            payload: todo.id
        })
    }

    return (
        <div
            onClick={completedTodo}
            style={{textDecoration: todo.completed ? "line-through" : ""}}
        >
            <p>{todo.item}</p>
        </div>
    )
}