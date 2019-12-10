


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
    }
}