import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'

import { reducer } from '../reducers/todoReducer'

const TodoList = (props) => {
    const [{ toggle }, dispatch] = useReducer(reducer, intialState);

    return (
        <div className="todo-list">
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}