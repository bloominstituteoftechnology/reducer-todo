import ADD_TODO from '../actions/TodoActions';

export const todoReducer = (state, action) => {

    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                {
                item: action.payload,
                completed: false,
                id: new Date(),
                }
            ];
        default:
            return state;
    }
}