export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

export const initialState = [
    {
        name: "Learn about reducers",
        completed: false,
        id: 3892987590,
    },
    {
        name: "Do homework",
        completed: false,
        id: 2,
    }
];


function newTodo(name) {
    return { name: name, id: Date.now(), complete: false }
}

export const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete }
                    };
                    return todo
                })
                case ACTIONS.DELETE_TODO:
                    return todos.filter(todo => !todo.complete)
                    default:
                        return todos
                    };
                };