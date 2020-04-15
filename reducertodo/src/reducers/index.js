export const initialState = {
    tasks: [
        {
            item: 'Learn useReducer',
            id: 159,
            completed: false,
        },
        {
            item: 'Complete useReducer challenge',
            id: 201,
            completed: false,
        },
    ],
};

export const reducer = (state = initialState, action) => {
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
        case 'CLEAR_LIST':
            return {
                ...state,
                tasks: state.tasks.map((todo) => {
                    if (todo.completed) {
                        return { ...(todo - todo.completed) };
                    } else return todo;
                }),
            };
        default:
            return state;
    }
};
