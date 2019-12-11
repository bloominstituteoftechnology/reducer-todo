// Building initialState
export const initialState = {
	items: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: Math.floor((Math.random() * 100) + 1)
		},
		{
			item: 'Learn about redux',
			completed: false,
			id: Math.floor((Math.random() * 100) + 1)
		},
	]
};

// Building reducer
export const reducer = (state, action) => {
	switch (action.type) {
        case 'ADD_TODO':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Math.floor((Math.random() * 100) + 1)
            }
            return {
                ...state,
                items: [...state.items, newItem]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload2) {
                        item.completed = action.payload
                    } return {
                        ...item,
                        completed: item.completed
                    }
                })
            }
            case 'REMOVE_COMPLETED':
                return {
                    items: state.items.filter(item => item.completed !== true)
                }
		default:
			return state;
	}
};

