import React from 'react';
import Moment from 'react-moment';
import CompleteBy from './CompleteBy';
import { useInput } from './useInput';
import moment from 'moment';

const TodoItem = ({ todo, dispatch }) => {
    const [deadline, setDeadline, handleDeadline] = useInput('');
    const deadlineTime = moment(todo.deadline, moment.ISO_8601).valueOf();
    

    return (
        <div className='todo-item'>
        {!todo.completed && todo.deadline && deadlineTime < Date.now() && <h3>OverDue</h3>}
            <span className='item' style={todo.completed ? {textDecoration: 'line-through'} : {}} onClick={() => dispatch({type: 'toggle', payload: todo.id})}>{todo.item}</span>
            <div className="deadline">
                {todo.deadline && <Moment>{deadlineTime}</Moment>}
                {!todo.deadline && <CompleteBy deadline={deadline} handleDeadline={handleDeadline} dispatch={dispatch} id={todo.id}/>}
            </div>

            {todo.timeCompleted && <p>Completion Time: <Moment>{todo.timeCompleted}</Moment></p>}
        </div>
    );
};

 export default TodoItem;  