export const initialState = {
    items: [
    {name: 'To Do Starter',
    id: '44658463512',
    completed: false
    }]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                name: action.payload,
                id: Date.now,
                completed: false
        }
            return {
                ...state,
                items: [...state.items, newItem]
            }
        default:
            return state;
    }
}