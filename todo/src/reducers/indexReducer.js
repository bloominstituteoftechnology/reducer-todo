

export const initialState = {
    item: "This is the initial State in Reducer",
    completed: false,
    id: 1

};

export const actions = {
    ADD_TODO: "add-todo"
};


export function newToDo(name){
     return  { id: Date.now(), name: name, complete: false}
 }


export const listReducer = (todos, action) => {
    switch(action.type) {
        case actions.ADD_TODO:
            return [...todos, newToDo(action.payload.name)]
    };

};



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