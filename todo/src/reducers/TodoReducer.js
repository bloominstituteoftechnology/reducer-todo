import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../actions/TodoActions';

export const todoReducer = (state, action) => {

    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                item: action.payload,
                completed: false,
                id: Date.now(),
                }
            ];
        case TOGGLE_COMPLETED:
            return state.map(item => {
                if(item.id === action.payload){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
        case CLEAR_COMPLETED:
            return state.filter(item => {
                if(item.completed === false){
                    return item
                }
            })
        default:
            return state;
    }
}