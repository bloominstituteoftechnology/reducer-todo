import { SET_CLEAR, SET_NEW_TODO, SET_COMPLETED, SET_CURRENT_TEXT } from '../actions';

const reducer = (state, action) =>{
    switch(action.type) {
        case(SET_NEW_TODO):
            const newTodo = {item: action.payload, completed: false, id: new Date()};
            return({...state, list:[...state.list, newTodo]});
        case(SET_COMPLETED):
            console.log('complete')
            const updatedList = state.list.map((item) => {
                if(item.id === action.payload) {
                    return {...item, completed: !item.completed};
                } else {
                    return item;
                }
            })
            return({...state, list:updatedList});
        case(SET_CLEAR):
            const clearedList = state.list.filter((item) => {
                return(!item.completed)
            })
            return({...state, list:clearedList});
        case(SET_CURRENT_TEXT):
            return({...state, currentText:action.payload})
        default:
    }
}

export default reducer;