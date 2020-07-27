
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
    }
}