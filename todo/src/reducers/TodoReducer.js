
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const TodoReducer = (state, action) => {

    switch (action.type) {
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                completed: !state.completed
            };
        case 'ADD_TASK':
            return {
                ...state,
                item: action.payload,
                completed: false
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                // tasks: state.tasks.filter(item => {
                //     return !item.completed
                // })
            };
        default:
            return state;
    }
};