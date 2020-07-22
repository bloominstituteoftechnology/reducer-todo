import React, { useReducer } from 'react';
import { TodoReducer, initialState } from './reducers/TodoReducer';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <div>
            <h2
                key={state.id}
                name={state.item}
                completed={state.completed}>
                {state.item}
            </h2>

        </div>
    )
};

export default TodoList;