


export const initialData = {
    todos: [
        {
            todo: 'Learn about reducers',
            completed: false,
            key: Date.now
          }
    ]
}

export const todoReducer = (state =[], event) => {
    switch (event.type) {
        case "Add":
            return {
                ...state,
                todos: [ ...state.todos,
                    {
                        key: Date.now,
                        todo: event.text,
                        completed: false
                    }

                ]
            }
        case "tgl_done": return {
            ...state,
            todos: state.todos.map(todo => todo.id === event.id ? {
                ...todo,
                completed: !todo.completed
            }: todo)
        }
        case "Clear": return {
            ...state, todos: state.todos.filter(todo => !todo.completed)
            
        }
        default: return state

    }
}