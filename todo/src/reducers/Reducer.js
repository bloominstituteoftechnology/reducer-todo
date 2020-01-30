export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
            completeBy: new Date('2020-01-28')
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        //ADD TODO
        case 'ADD_TODO':
            return { todos: [...state.todos, action.todo] }
        //TOGGLE COMPLETED
        case 'TOGGLE_COMPLETED':
            let newTodos = state.todos.map(todo => {
                if(todo.id === action.id) {
                    todo.completed = !todo.completed;
                    return todo;
                }
                return todo;
            })
            return { todos: newTodos }
        //CLEAR COMPLETED
        case 'CLEAR_COMPLETED':
            let notCompletedTodos = state.todos.filter(todo => {
                return todo.completed === false;
            })
            return { todos: notCompletedTodos }
        //DEFAULT CASE
        default:
            return state;
    }

}