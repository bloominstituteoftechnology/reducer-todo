export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const initialTodoState = {

    item:"Learn about reducers",
    completed: false,
    id: 3892987589

}


export const todoReducer = (state, action) => {

    switch(action.type) {

        case TOGGLE_COMPLETE:
            return {
                ...state,
                completed: !state.completed
            };
            case "END_ITEM_UPDATE":
                return {
                    ...state,
                    item: action.payload ? action.payload: state.item,
                    completed: false
                };
                default:
                    return state;   

    }


}