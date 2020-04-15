const initialState = {
    tasks: [
        {
            item: 'learn useReducer',
            id: 5619815445651654456,
            completed: false,
        },
        {
            item: 'Complete useReducer challenge',
            id: 5619815445651654459,
            completed: false,
        },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                tasks: [...state.tasks, action.payload],
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                tasks: state.tasks.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        };
                    } else return todo;
                }),
            };
        default:
            return state;
    }
};
