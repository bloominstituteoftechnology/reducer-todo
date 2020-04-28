export const todo = [
    {
        item: 'completed items',
        completed: true,
        id: 0
    }
]

export const todoReducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]

        case 'TOGGLE_TODO':
            return (
                    state.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed}
                    } else {
                        return todo;
                    }
                })
            )
        case 'REMOVE_TODO':
            return state.filter(todo => !todo.completed)
            default: return state;
    }
};
