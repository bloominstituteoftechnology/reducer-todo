import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/TodoActions';

export const todoReducer = (state, action) => {

    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                item: action.payload,
                completed: false,
                id: new Date(),
                }
            ];
        case TOGGLE_COMPLETED:
            return { ...state, completed: !state.completed };
        default:
            return state;
    }
}