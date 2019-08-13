export const iniState = {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                completed: !state.completed
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                task: action.payload
            };
        case 'UPDATE_ID':
            return {
                ...state,
                id: state.id + 1
            }
        default:
            return state;
    }
};