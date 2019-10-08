// ### STEP 1 - Build a simple reducer and initial state

// - In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
// - In the same file, build your initial state object that has a list of todos with the following shape:

// ```js
// {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }
// ```

// - Export both the reducer and the initial state object

export const todo = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Dont learn about reducers',
        completed: false,
        id: 3839987589
    },
    {
        item: 'Maybe learn about reducers?',
        completed: false,
        id: 3892984589
    }
];


export const reducer = (state, action) => {
    console.log("Reducer State", state, "Reducer Action", action);
    switch (action.type){
        // - Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)
        case "ADD_TODO":
            console.log("Reducer Case State", state);
            return [
                ...state,
                {
                    item: action.payload, 
                    id: Date.now(),
                    completed: false
                }
            ];
        // - Write the `case` in your reducer for toggling the completed property
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        // - Write the `case` in your reducer for filtering completed todos
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
};