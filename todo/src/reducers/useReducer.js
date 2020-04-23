export const initialState = {
 todoItem: []
};

export const todoListReducer = ( state, action ) => {
    switch(action.type) {
        case "ADD_ITEM" :
        return {
            todoItem: [
                ...state.todoItem,
                {todoItem: action.payload, completed: false}
            ]
        }
        default:
            return state;
    }
}