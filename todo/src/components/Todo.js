import React from 'react';
// import {initialState, reducer} from '../reducers/reducer';

const Todo = ({task, dispatch}) => {
    console.log('Todo:', task)

    return (
        <div className={task.completed ? 'completed' : 'not-completed'}
        onClick={() => dispatch({type: 'TOGGLE_COMPLETE', payload: task.id})}>

            <p>{task.task}</p>

        </div>
    );
};

export default Todo;

