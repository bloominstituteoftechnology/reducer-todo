export let initialState = {

    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            item: 'This is now a list',
            completed: false,
            id: 2
        },
    ]
}


export const myReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        // NEW CASE HERE
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos:state.todos.map(todo=> {
                    if(todo.id === action.payload.id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            };
    
    case 'REMOVE_TODO':
return {
    ...state,
    todos: [...state.todos.filter(todo => !todo.completed)]
};
        default:
            return state;
    }
};
