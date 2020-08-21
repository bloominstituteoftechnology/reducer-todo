export const initialState = {
    item: 'Learn about reducers',
    // I want to be able to click on a button that says "Add New ToDo" that creates a line where I can type a new task, submit the task, and have it populate as a list with a circle next to it that when tapped completes the task and moves it to the bottom
    completing: false,
    id: 3892987589
}

export const reducerToDo = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, adding: action.payload, completing: false };
        case "TOGGLE_COMPLETED":
            return {...state, completing: !state.completing};
        case "CLEAR_TODO":
            return {...state, clearing: !state.clearing};

        default:
            return state
    }
}