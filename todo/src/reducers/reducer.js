const list = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
]

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": 

        const newTodo = {
            item: action.payload,
            completed: false,
            id: new Date()
        }

        return [
            ...state, newTodo
        ];

        case "CLEAR_TODO":
                return [...state.map( item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        } 
                    } else {
                        return item
                    }
                })]
                

        default: 
            return state
    }
}

export { list, todoReducer }