export const todo = [
    {
        item: 'completed items',
        completed: true,
        id: 0
    }
]

export const reducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
               };
               
               return [...state, newTodo];
        case 'TOGGLE_TODO':
            return state.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, completed: !item.completed}
                    } else {
                        return item;
                    }
                })
        case 'REMOVE_TODO':
            return state.map(item => {
                if (item.completed) {
                 return {
                   ...item
                };
                } else {
                 return item;
                }
              });
            default:
            return state;
    }
};
