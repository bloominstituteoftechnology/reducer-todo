import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Todo() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();

const Todos = () => {
const todos = useSelector(state => state.todos);
const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
})
if (!todos || !todos.length) {
    return <p>Relax... you have nothing on your list!</p>
}
return (
    <ul>
    {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
    </ul>
)
}

const handleChange = (e) => {

    setNewTodo(e.target.value)
}

const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
    }
})
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Add Todo</button>
            <Todos /> 
        </div>
    )
}
