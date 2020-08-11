
export const initialState = [
    {
        task: 'Finish Assignment',
        id: 1001,
        completed: false
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return
            [...state,
            {
                task: action.payload,
                id: new Date()
            }
            ]

        case "IS_COMPLETED":
            return
            [...state,
            {
                completed: state.task.completed.map(task => {
                    if (task.id === action.payload)
                        return [
                            ...state,
                            completed: !task.completed
                        ]
                    )
            }
            ]

        case "IS_CLEARED":
            return {
                ...state,
                task: state.task.filter(task => {
                    return {
                        task.completed === false
                    }
                })
            }
        default:
            return state

    }
}    
     
