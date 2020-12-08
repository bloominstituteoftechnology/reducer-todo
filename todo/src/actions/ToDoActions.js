export const ADD_TODO = 'ADD_TODO'
export const SET_INPUT = 'SET_INPUT';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const addToDo = (task) => {
    return ({type: ADD_TODO, payload: task})
}

export const setInput = (input) => {
    return ({type: SET_INPUT, payload: input})
}

export const toggleCompleted = (task) => {
    return ({type: TOGGLE_COMPLETED, payload: task })
}

export const clearCompleted = (list) => {
    return ({type: CLEAR_COMPLETED, payload: list})
}