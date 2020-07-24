
export const initialState = {
    tasks: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Complete Project',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Submit a Retrospective',
        completed: false,
        id: 3892987591
    },
    ]
};

export const TodoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [{
                    ...state.tasks,
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }]


            };
        default:
            return state;
    }
}