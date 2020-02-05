export const initialTodoState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                action.payload
            ];
        case "TOGGLE_COMPLETED":
            const newState = [...state];
            newState[action.payload].completed = !newState[action.payload].completed;

            return newState;
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed)
        default:
            return state;
    }
};