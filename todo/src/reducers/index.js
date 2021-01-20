export const todoList = [{
    task: 'Make Bed',
    completed: false,
    id: Date.now()
}]

export const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            return({...state, todoList:action.payload });
        case("REMOVE_TODO"):
            return({...state, todoList:action.payload });
        case("TOGGLE_COMPLETE"):
            return({...state, completed: action.payload});
        case("CLEAR_COMPLETE"):
            return({})
        default:
            return(state)
    }
}

export default reducer