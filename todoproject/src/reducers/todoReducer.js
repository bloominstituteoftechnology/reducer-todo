export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now(),
    itemArray: []
}]

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
                const newItem = {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                };

            return [...state, newItem];
        default: 
            return state;
    }
}