import React from 'react';

const CompleteBy = ({deadline, handleDeadline, dispatch, id}) => {
    return(
        <form>
            <input type='date' name='deadline' value={deadline} onChange={e => {
                dispatch({type: 'deadline', payload: {deadline: e.target.value, id: id}});
                return handleDeadline(e.target.value);
            }}/>
        </form>
    );
}

export default CompleteBy;