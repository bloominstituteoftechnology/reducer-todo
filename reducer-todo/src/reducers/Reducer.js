export const todos = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

export const reducer = (state, action) => {
    switch(action.type){
        case 'add':
        return(
            [...state, {
                item: action.payload,
                completed: false,
                id: Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000
            }]
        );
        case 'clear':
            return state.filter(todo => !todo.completed);
        case 'toggle':
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        default: 
            return state;
    }
};
