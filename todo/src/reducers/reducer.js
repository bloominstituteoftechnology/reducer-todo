
export const todo = [
    {
        item: 'Learn Redux',
        completed: false,
        id: Date.now()
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {item: action.payload, completed: false, id: Date.now()}
            ]
        case 'TOGGLE_COMPLETED':
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                }
                return todo
            })
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}