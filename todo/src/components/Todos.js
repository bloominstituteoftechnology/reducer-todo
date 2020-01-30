import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducers/Reducer'

import moment from 'moment'

import AddTodoForm from './AddTodoForm'
const Todos = () => {
    //STATE AND REDUCER
    const [state, dispatch] = useReducer(reducer, initialState)

    //ADD TODO
    const addTodo = (item, date) => {
        const newTodo = {
            item: item,
            completed: false,
            id: Date.now(),
            completeBy: date
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
                return <div key={todo.id} onClick={() => toggleCompleted(todo.id)} >
                    <h3 className={todo.completed === true ? 'completed' : null}>{todo.item}</h3>
                    <h6>Complete by: {moment().format("MMM Do YYYY")}</h6>
                </div>
            })}
            <button onClick={() => clearCompleted()}>Clear Completed</button>
        </div>
    )
}

export default Todos