
export const initialState = {
    todos: [],
}

export const reducerContainer = ( state, action) => {
    switch (action.type) {
        case "ADD-TODO":
            return {
                todos: [...state.todos, {
                id: Date.now(),
                name: action.payload,
                completed: false,
                }]
            }
        default:
            return state
    }
}