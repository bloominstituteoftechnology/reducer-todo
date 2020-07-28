
export const initialToDoState = {
    tasks: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
    ]
}

export const toDoReducer = (state, action) => {
        switch(action.type) {
            case 'ADD_NEW_TASK':
                const newTask = {
                    id: Date.now(),
                    item: action.payload,
                    completed: false
                }
            return {
            ...state,
            tasks: [...state.tasks, newTask]
        }
            case 'TOGGLE_TASK':
                return {...state, tasks: state.tasks.map(task => {
                    if(task.id === action.payload) {
                        return {
                            ...task, 
                            completed: !task.completed}
                    } else {
                        return task
                    }
                })
            }
            case 'CLEAR_COMPLETED':
                return {
                    tasks: state.tasks.filter((task =>
                        !task.completed))
                }
            default:
                return state;
            }
}