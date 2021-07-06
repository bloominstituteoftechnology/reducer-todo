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
                id: Date.now * 10000008,
                completed: false
        }
            return {
                ...state,
                items: [...state.items, newItem]
            };
        case 'TOGGLE_COMPLETED':
              const newTodo= state.items.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } else {
                        return item
                    }
                })
                return {
                    items: [...newTodo]
                }
            
        case 'CLEAR_COMPLETED':
                const cleared =  state.items.filter(item => !item.completed)
        return {
            items: [...cleared]
               
    }
        default:
            return state;
    }
}