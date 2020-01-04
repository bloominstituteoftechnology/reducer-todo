export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Math.random()
}]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]
        
        case "COMPLETED_TODO":
            return state.map((item) => {
                return item.id === action.payload ?
                {...item, completed: !item.completed} :
                item
            })

        case "REMOVE_COMPLETED":
            return state.filter((item) => !item.completed)

        default: 
            return state
    }
};