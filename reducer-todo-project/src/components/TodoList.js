import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'
import { reducer, todo } from '../reducers/Reducer'

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, todo);
    console.log(state);

    return (
        <>
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    )
} 

export default TodoList;