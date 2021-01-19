export const ADD_TODO = 'ADD_TODO'
export const COMPLETED_TODO = 'COMPLETED_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'

export const addTodo  = (todo) => {
    const newTodo = {todo, id: Date.now(), completed:false}
    return ({type: ADD_TODO, payload: newTodo})
}
export const completedTodo  = (id) => {
    return ({type:COMPLETED_TODO, payload: id})
}

export const clearTodo  = () => {
    return ({type:CLEAR_TODO})
}
