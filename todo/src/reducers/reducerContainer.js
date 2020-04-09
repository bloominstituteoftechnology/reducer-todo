
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
        case 'TOGGLE-COMPLETED':
            return {
                todos: [...state.todos.map( todo => {
                    if(todo.id === action.id ) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                })]
            }
        case 'CLEAR':
            return {
                todos: [...state.todos.filter( todo => !todo.completed)]
            }
        default:
            return state
    }
}