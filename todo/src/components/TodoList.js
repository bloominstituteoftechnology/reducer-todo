import React, { useReducer } from 'react';
import { TodoReducer, initialState } from '../reducers/TodoReducer';
import Todo from './Todo';
import { tasks } from './taskdata';



const TodoList = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <>
            {tasks.map(taskName => {
                return (
                    <Todo
                        onClick={() => {
                            dispatch({ type: 'TOGGLE_COMPLETED' })
                        }}
                        task={taskName.item}
                        key={taskName.id}
                        completed={taskName.completed} />)
            })}
        </>
    )
};

export default TodoList;