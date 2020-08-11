
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
            return [...state,
            {
                ...state,
                task: action.payload,
                id: new Date()
            }
            ]

        case "IS_COMPLETED":
            return state.map(InitialState => {
                if (state.id === action.payload) {
                  return {...state, completed: !state.completed}
                } else {
                  return state
                }
              })
            //   return
            // [...state,
            // {
            //     completed: state.task.completed.map(task => {
            //         if (task.id === action.payload)
            //             return [
            //                 ...state,
            //                 {completed: !task.completed}
            //             ]
            //         }
            //         )
            // }
            // ]

        case "IS_CLEARED":
            return state.filter(task => 
                task.completed === false)
            
            // state.filter (InitialState => {
            //     return {...state, completed:
            //     state.completed === false}
            //     else {
            //         return state
            //     }
            // })
            // return {
            //     ...state,
            //     task: state.task.filter(task => {
            //         return {
            //             ...state,
            //             task.completed === false
            //         }
            //     })
            // }
        default:
            return state

    }
}    
     
