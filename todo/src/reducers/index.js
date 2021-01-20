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
        // 1. map through each todo
        //2. if todo has the id we are looking for (in the action.payload)
        //3. return a copy of the item with completed flipped
        // if todo does not have id we are looking for, return the item as is
            return({...state, todos:state.todos.map(todo=>{
                if (todo.id === action.payload) {
                    return ({...todo, completed: !todo.completed})
                }
                else {
                    return(todo)
                }
            }) });
        case("CLEAR_COMPLETE"):
            return({})
        default:
            return(state)
    }
}

export default reducer