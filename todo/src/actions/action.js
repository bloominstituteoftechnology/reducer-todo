export const  SET_ADD_TASK = " SET_ADD_TASK";
export const SET_TOGGLE_TASK = 'SET_TOGGLE_TASK'
export const SET_CLEAR_TASK = 'SET_CLEAR_TASK'

export const setAddTask = (addTask) => {
    return {type: SET_ADD_TASK, payload:addTask}
}

export const setToggleTask = (taskId) => {
    return {type: SET_TOGGLE_TASK, payload: taskId}
}

export const setClearTask = () => {
    return {type: SET_CLEAR_TASK}
}