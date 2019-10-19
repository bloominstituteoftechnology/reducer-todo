

export const initialState = {
    todo: "",
    editing: false
}

export function todo(state, action) {
    switch (action.type) {
        case "TOGGLE_EDITING":
            return {
                ...state,
                editing: !state.editing 
            }

        case "UPDATE_TODO":
            return {
                ...state,
                todo: action.payload
            }

        default:
            return state;
    }
}