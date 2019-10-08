export const initialState = {
    tasks: [
        {
        task: 'Eat the apples.',
        id: 22,
        completed: false,
        },
        {
        task: 'Cut paper.',
        id: 23,
        completed: false,
        },
    ]
};

export const reducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                completed: !state.completed
            };
        case 'ADD_TASK':
            const newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false,
            };
            return{
                ...state,
                task: [...state.tasks, newTask]
            };
        case 'REMOVE_COMPLETED':
            return {
                ...state,
                initialState: [...state.tasks, !state.task.completed]
            };
        default:
                return state;
    }
}