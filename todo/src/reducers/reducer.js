export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            const newToDo = {
                item: action.payload.toDoInput,
                completed: false,
                id: Date.now(),
            }
            return [...state, newToDo]
        case 'TOGGLE_COMPLETED' :
            console.log(action)

            return state.map(item => {
                return item.id === action.payload.id ? {...item, completed: !item.completed} : item;
            });
        case 'CLEAR_COMPLETED' :
            return state.filter(item => {
                return !item.completed
            })
        default:
            return state;
    };
};