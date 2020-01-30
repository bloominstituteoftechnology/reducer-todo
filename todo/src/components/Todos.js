import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducers/Reducer'

import AddTodoForm from './AddTodoForm'
const Todos = () => {
    //STATE AND REDUCER
    const [state, dispatch] = useReducer(reducer, initialState)

    //ADD TODO
    const addTodo = (item) => {
        const newTodo = {
            item: item,
            completed: false,
            id: Date.now()
        }
        dispatch({ type: 'ADD_TODO', todo: newTodo })
    }

    //TOGGLE COMPLETED
    const toggleCompleted = (id) => {
        dispatch({ type: 'TOGGLE_COMPLETED', id: id })
    }

    //CLEAR COMPLETED
    const clearCompleted = () => {
        dispatch({ type: 'CLEAR_COMPLETED' })
    }
    return (
        <div>
            <h2>Todos</h2>
            <AddTodoForm addTodo={addTodo}/>
            {state.todos.map(todo => {
                return <div key={todo.id}>
                    <h3 className={todo.completed === true ? 'completed' : null} onClick={() => toggleCompleted(todo.id)}>{todo.item}</h3>
                </div>
            })}
            <button onClick={() => clearCompleted()}>Clear Completed</button>
        </div>
    )
}

export default Todos