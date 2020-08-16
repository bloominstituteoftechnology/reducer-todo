import React from "react";

export default function Todo({ todo, dispatch }) {
    const handleChanges = (id) => {
        console.log(id)
        console.log(todo)
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: id
        })
    }

    console.log(todo.id)

    return (
        <div

            className={`todo ${todo.completed ? "completed" : ""}`}
            // style={{ textDecoration: todo.item.completed ? "line-through" : "" }}
            onClick={() => handleChanges(todo.id)}>
            <p>{todo.item}</p>
        </div>
    )
}




// const Todo = props => {
//     return (
//         <div className={`item ${props.item.completed ? 'completed' : ''}`}
//             style={{ textDecoration: props.item.completed ? "line-through" : "" }}
//             onClick={() => props.dispatch({ type: 'TOGGLE', payload: props.item })}
//         >
//             <h3>{props.item.item}</h3>
//         </div>
//     )
// }

// export default Todo;