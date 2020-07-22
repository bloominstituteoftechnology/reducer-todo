import React, { useReducer } from 'react';
import { TodoReducer, initialState } from '../reducers/TodoReducer';
import Todo from './Todo';
import { tasks } from './taskdata';



const TodoList = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <div>
            {tasks.map(taskName => {
                return (
                    <Todo
                        task={taskName.item}
                        id={taskName.id}
                        completed={taskName.completed} />)
            })}
        </div>
    )
};

export default TodoList;