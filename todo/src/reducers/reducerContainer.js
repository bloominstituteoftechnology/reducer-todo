import moment from 'moment';
export const initialState = {
    todos: [],
}

export const reducerContainer = ( state, action) => {
    switch (action.type) {
        case "ADD-TODO":
            const timeAdded = moment().format('lll');
            return {
                todos: [...state.todos, {
                id: Date.now(),
                name: action.payload,
                completed: false,
                dateCreated: timeAdded
                }]
            }
        case 'TOGGLE-COMPLETED':
            return {
                todos: [...state.todos.map( todo => {
                    if(todo.id === action.id ) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })]
            }
        case 'CLEAR':
            return {
                todos: [...state.todos.filter( todo => !todo.completed)]
            }
        default:
            return state
    }
}