
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const TodoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                item: action.payload,
                completed: false
            };
        default:
            return state;
    }
}