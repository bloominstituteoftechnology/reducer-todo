export const ADD_TASK = 'ADD_TASK';
export const MARK_DONE = 'MARK_DONE';
export const CLEAR_DONE = 'CLEAR_DONE';

export const addTask = (task) => {
    return (
       {type:ADD_TASK, payload: task, id:Date.now(), completed: false}
    );
}

export const markDone = (id) => {
    return (
       {type:MARK_DONE, payload: id}
    );
}

export const clearDone = () => {
    return {type:CLEAR_DONE}
}