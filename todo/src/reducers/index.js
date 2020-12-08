



const reducer = (state, action) => {
    switch(action.type){
        case 'add-todo':
            return [...state, {item: action.payload, completed: false, id: Date.now()}]
        
        case 'toggle-complete':
            return [state.map((todo) => 
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            )]

        default:
            return(state);
    }
}

export default reducer;