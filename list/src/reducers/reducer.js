export const initialState = [{
        item: 'bergur',
        completed: false,
        id: 0
    },
    {  
        item: 'apple',
        completed: false,
        id: 1
    },
    {  
        item: 'banananana',
        completed: false,
        id: 2
    },
]

export function reducer(state, action) {
    switch (action.type) {
        case "addItem":
            return [ ...state,
                {
                    item: action.payload, 
                    completed: false,
                    id: Date.now()
                }
            ]
        case "toggleCompleteness":
            return state.map(item => {
                if (item.id === action.payload) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        case "removeCompleted":
            return state.filter(item => !item.completed)
        default:
            return state
    }
  }