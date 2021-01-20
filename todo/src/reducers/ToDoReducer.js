
export const initialState = {

    
    todos:[{
        title: "Get over Imposter Syndrome",
        id: 0,
        completed: false
    },{
        title: "Cry Anyway",
        id: 1,
        completed: false
    },{
        title: "Code",
        id: 2,
        completed: false
    },{
        title: "Repeat",
        id: 3,
        completed: false
      }
    ]
}
const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            const newTodo ={
                id: state.todos.length,
                completed: false,
                title: action.payload
            };

            return ({...state, todos: [...state.todos, newTodo]});
        default:
            return state;
    }
}

export default reducer;