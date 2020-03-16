import React from 'react';
import moment from 'moment';

let Todo = props => {
    //console.log('todo props', props)
    return (
        <div onClick={() => props.toggleTask(props.id)}>
            <h3>
                {props.status ? <i className="fas fa-check-circle"></i> : <i className="far fa-check-circle"></i>}
                 {props.name}
            </h3>
            <p>{props.status ? 'Completed' : 'Incomplete'}</p>
            {props.date != null ? <p>{moment(props.date).calendar()}</p> : null}
        </div>
    )
}

export default Todo;