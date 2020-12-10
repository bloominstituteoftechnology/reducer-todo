export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO = 'MARK_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const addTodo = (name,idx) => {
    return({
        type: ADD_TODO,
        payload: name,
        id: idx
    })
}
export const markTodoDone = (name,idx) => {
    return({
        type: MARK_TODO,
        id:idx,
        payload: {completed: true}
    })
}

export const deleteTodo = (name,idx) => {
    return({
        type: DELETE_TODO,
        id:idx
    })
}