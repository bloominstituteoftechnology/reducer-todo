export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const NEW_TODO= "NEW_TODO"
export const CLEAR_COMPLETE= "CLEAR_COMPLETE"


export const setAddTodo = (newTodo) =>{
    return( {type: ADD_TODO, payload:newTodo} )
}

export const setToggleCompleted = (id) =>{
    return( {type: TOGGLE_COMPLETED, id: id } )
}

export const setNewTodo = (todo) =>{
    return( {type: NEW_TODO, payload: todo })
}

export const setClearComplete = (todo) =>{
    return( {type: CLEAR_COMPLETE, payload: todo} )
}