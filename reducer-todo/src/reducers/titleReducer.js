//initial state object
export const initialState = {
    title: "Christine's Todo List",
    editing: false
}

//reducer function
export const titleReducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            };
        case UPDATE_TITLE:
        return {
            ...state,
            title: action.payload,
            editing: !state.editing
        }
            default:
                return state;
    }
}

export const TOGGLE_EDITING = 'TOGGLE_EDITING'
export const UPDATE_TITLE = 'UPDATE_TITLE'