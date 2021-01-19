export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"

export const addTodo = (newTodo) =>{
    return( {type: ADD_TODO, payload:newTodo} )
}

export const toggleTodo = (completed) =>{
    return( {type: TOGGLE_COMPLETED, payload:completed} )
}
