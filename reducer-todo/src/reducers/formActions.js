export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';


export const addTask = (action) => {
  const newTask = {name: action, id: Date.now(), completed: false}
    return ({type: ADD_TASK, payload: newTask})
}

export const toggleCompleted = (taskId) => {
    return ({type: TOGGLE_COMPLETED, payload: taskId})
}

export const clearCompleted = () => {
    return ({type: CLEAR_COMPLETED})
}
