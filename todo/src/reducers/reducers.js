export const initialState = {
    todo: { item:"", completed: false },
    todos: []
};

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO" :
            return {
                ...state, 
                todos: [ ...state.todos, { item}]
            };
        case "ACTION_COMPLETED" : 
            return {
                ...state,

            }
 
    }
}