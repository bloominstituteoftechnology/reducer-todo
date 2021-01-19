export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const NEW_TODO= "NEW_TODO"


export const setAddTodo = (newTodo) =>{
    return( {type: ADD_TODO, payload:newTodo} )
}

export const setToggleCompleted = (completed) =>{
    return( {type: TOGGLE_COMPLETED, id: completed } )
}

export const setNewTodo = (todo) =>{
    return( {type: NEW_TODO, payload: todo })
}
