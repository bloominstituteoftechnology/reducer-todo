import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import {initialState, reducer} from '../reducers/todoReducers';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="todo-list">
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}

        </div>
    )
} 

export default TodoList;