import React from 'react';
import moment from 'moment';

let Todo = props => {
    //console.log('todo props', props)
    return (
        <div className="task">
            <div onClick={() => props.toggleTask(props.id)}>
                {props.status ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
            </div>

            <div className="task-details">
                <h3>{props.name}</h3>
                <div className="task-status">
                    <p className={props.status ? "task-completed" : "task-incomplete"}>{props.status ? 'Completed' : 'Incomplete'}</p>
                    {props.date != null ? <p>{moment(props.date).calendar()}</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Todo;