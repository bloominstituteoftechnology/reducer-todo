const list = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
]

const todoReducer = (state, action) => {
    switch (action.type) {
        case "NEW_TODO": 
        const newTodo = {
            item: action.payload,
            completed: false,
            id: new Date()
        }

        return [
            ...state, newTodo
        ]

        default: return state
    }
}

export { list, todoReducer }