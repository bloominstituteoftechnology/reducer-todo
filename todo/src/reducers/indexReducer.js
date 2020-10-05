
export const actions = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo"
};


export function newToDo(name){
     return  { id: Date.now(), name: name, complete: false}
 }


export const listReducer = (todos, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case actions.ADD_TODO:
            return [...todos, newToDo(action.payload.name)]
        case actions.TOGGLE_TODO: 
            return todos.map(todo => {
                if(todo.id ===action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo

            })
            case actions.DELETE_TODO: 
            return todos.filter(todo => todo.id !== action.payload.id)
            default:
                return todos    
    };

};

// export const initialState = {
//     item: "This is the initial State in Reducer",
//     completed: false,
//     id: 1

// };



// export const listReducer = (state, action) => {
//        switch(action.type) {
//          case "UPDATE_ITEM":
//             return {...state, item: action.payload, completed: false};
//          case "TOGGLE_COMPLETED":
//              return {...state, completed: !state.completed};  
//         default:
//             //console.log("Hello from the default in indexReducer", state);
//             return state;
            
//     }
// };