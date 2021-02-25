export const initialState =[{
    task: 'Walk the Dog',
    completed: false,
    id: 0
},
{
    task: 'Meet friends for coffee',
    completed: false,
    id: 1
},
{
    task: 'Practice Code',
    completed: false,
    id: 2
}
]


export const reducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_TASK':
            return[...state, action.payload]

        case 'COMPLETE_TASK':
            return state.map((task)=>
            (task.id === action.payload)? {...task, completed: !task.completed}: task)

        case 'CLEAR_COMPLETED':
            return state.filter((item)=> !item.completed)
            
    
        default:
            return state;
    }
}

