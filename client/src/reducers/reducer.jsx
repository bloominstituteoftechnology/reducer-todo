export const initialState = {
    todos: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            task: 'Learn stuff',
            completed: false,
            id: 2
        },
        {
            task: 'Learn if you want to',
            completed: false,
            id: 3
        },
        {
            task: 'Learn nothing',
            completed: false,
            id: 4
        },
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': 
            const newTask = {
                task: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todos: [...state.todos, newTask]
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                todos: state.todos.map(task => {
                if (action.payload === task.id) {
                    return {
                    ...task,                    
                    completed: !task.completed
                    };
                }
                return task;
                })
            };
            case 'CLEAR_COMPLETED':
                return {
                    ...state,
                    todos: state.todos.filter( e => !e.completed)
                };
        default:
            return state;
    }
}