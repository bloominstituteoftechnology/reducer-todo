import React from 'react';


import { TodoReducer } from '../reducers/TodoReducer';

const TodoList = () => {
    const [todoState, dispatch] = useReducer(TodoReducer)

    return (
        <div className="todo-list">
            {todoState.task
                <p>{todoState.task}{''}
                <i
                className="far fa-edit"
                onClick={() => dispatch({type:ADD_ITEM})}/>
                </p>
            
                <div>
                    <input 
                        className="task-input"
                        type="text"
                        name="newTaskText"
                        value={newTaskText}
                        onchange={handleChanges}/>
                        <button onClick={() => dispatch({type: ADD_ITEM, payload: newTaskText})
                        }
                        >ADD TASK</button>

                </div>
            
        }
        </div>
    );
};

export default TodoList;

