import { SET_ADD_TODO, SET_SELECT_TODO, SET_CLEAR_TODO, SET_EDIT_TODO } from './../actions'

const reducer = (state, action) => {
    switch(action.type) {
        case(SET_ADD_TODO):
            return({...state, Addtodo:action.payload});
        case(SET_SELECT_TODO):
            return({...state, selectTodo:action.payload });
        case(SET_CLEAR_TODO):
            return({...state, clearTodo:action.payload});
        case(SET_EDIT_TODO):
            return({...state, editTodo:action.payload});
        default:
            return(state);
    }
}
