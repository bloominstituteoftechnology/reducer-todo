export const initialState = [{
        item: 'aawdawdw',
        completed: false,
        id: 0
    },
    {  
        item: 'apple',
        completed: false,
        id: 1
    },
    {  
        item: 'pizza',
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
                    id: new Date()
                }
            ]
        default:
            return state
    }
  }