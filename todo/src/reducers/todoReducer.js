export const initialState =[
    {
    task: 'Homework',
    id: 123456,
    completed: false
    },
    {
    task: 'Shop',
    id: 456789,
    completed: false
    },
    {
    task: 'Clean',
    id: 65497,
    completed: false
    }
]

export const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'new_todo':
            const newItem = {
                task: action.payload,
                id: Date.now(),
                completed: false
            }
            return [
                ...state,
                newItem 
            ]
        case 'toggle':
            return [
                ...state.map(item => action.payload === item.id ? {...item, completed: !item.completed} : item)
            ]
        case 'completed':
            return [
                ...state.filter(item => !item.completed)
            ]

        default: return state;
    }
}