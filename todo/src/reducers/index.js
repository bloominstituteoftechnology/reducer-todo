const todos = [
    {item: 'Learn about reducers',
     completed: false,
     id: 84320984239},

    {item: 'Learn rudux',
    completed: false,
    id: 984239} // crashes if the first digit is '0'
]

export const initialState = (todos);

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return state;
        case "TOGGLE_ITEM":
            return state;
        case "TOGGLE_COMPLETED":
            console.log("ITEM_TOGGLE");
            return state;
        default:
            return(`No action found: ${action.type}. There was no matching action in this reducer`);

    }
}