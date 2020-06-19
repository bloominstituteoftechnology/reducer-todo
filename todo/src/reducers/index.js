const todos = [
    {
     item: 'Learn about reducers',
     completed: false,
     id: 84320984239
    },

    {
    item: 'Learn rudux',
    completed: false,
    id: 984239 // crashes if the first digit is '0'
    } 
]

export const initialState = (todos);

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, {item: action.payload, completed: false, id: Date.now()}];
        case "CLEAR_COMPLETED":
            return [...state.filter(item => item.completed === false)];
            /*return state.filter(todo => {
                !todo.completed;
            })*/
        case "TOGGLE_COMPLETED":
            console.log(`ITEM_TOGGLE ${action.payload}`);
                       
            return state.map(todo =>{
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed};
                }else{
                    return todo;
                }
            })
            
            //return {...state, item: action.payload,completed: !state.completed, id: state.id};
        default:
            return(`No action found: ${action.type}. There was no matching action in this reducer`);

    }
}