export const initialState = {
    tasks: [ 
        {
            id: 1,
            item: 'Fix bedroom window',
            completed: false,
            date_completed: null
        }, 
        {
            id: 2,
            item: 'Water plants',
            completed: true,
            date_completed: 'January 5'
        },
        {
            id: 3,
            item: 'Go to the gym',
            completed: false,
            date_completed: null
        }
    ]
}

export const todoReducer = (state, action) => {
    console.log(action)
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
        case 'TOGGLE_TASK_STATUS':
            const updatedTasks = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task, 
                        completed: !task.completed,
                        date_completed: !task.completed ? Date.now() : null
                    }
                } else {
                    return task
                }
            })
            return {
                ...state,
                tasks: updatedTasks
            }
        case 'FILTER_COMPLETED_TASKS':
            const incompleteTasks = state.tasks.filter( task => {
                if (task.completed === false) {
                    return {...task}
                }
            }) 
            return {
                ...state,
                tasks: incompleteTasks
            }
        default: 
            return state;
    }
}
