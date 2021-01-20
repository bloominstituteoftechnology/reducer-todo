export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO = 'MARK_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';
export const addTodo = (name) => {
 return {
     type: ADD_TODO, 
     payload: name,
 }
}

export const markTodo = (id) => {
    return {
        type: MARK_TODO,
        id
    }
}
export const clearTodo = (id) => {
    return {
        type: CLEAR_TODO,
        id
    }
}