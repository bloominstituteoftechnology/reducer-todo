
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
    console.log('from TR', action);
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }]
            };

        case 'TOGGLE_COMPLETED':
            return {
                tasks: state.tasks.map((task, taskId) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task)
            }

        default:
            return state;


    }
}