export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
                return { 
                    todo: [...state.todo, {text: action.text, id: Date.now(), completed:false}]
                };
        case "TOGGLE_TODO": 
                return {
                    todo: state.todo.map((todos, index) => index === action.index ? {...todos, completed: !todos.completed} :todos)
                };
        case "CLEAR_TODO": 
                return {
                    ...state,
                    todo: state.todo.filter(todos => !todos.completed)
                }
            default: return state; 

        }
    
}