export const initialState = {
    todos: [{
        task: 'Make Bed',
        completed: false,
        id: 1
    },
{
        task: 'Laundry',
        completed: false,
        id: 2
}]
}

// reducers- shape of our data and how we are manipulating this data

export const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            const newTodo = {
                task: action.payload,
                completed: false,
                id: state.todos.length + 1
            };
            return({...state, todos:[...state.todos, newTodo] });
        case("REMOVE_TODO"):
            return({...state, todos:action.payload });
        case("TOGGLE_COMPLETE"):
            return({...state, completed: action.payload});
        case("CLEAR_COMPLETE"):
            return({})
        default:
            return(state)
    }
}

export default reducer