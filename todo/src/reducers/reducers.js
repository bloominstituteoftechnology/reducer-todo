
export const initialState = {
    items: [
        {
            item: 'Make a todo list app',
            completed: true,
            id: 3892987589
        },
        {
            item: 'todo list apps',
            completed: false,
            id: 34
        }
    ]
};
  
export const reducer = (state, action) => {
    switch (action.type) {
        case "SUBMIT_TODO":
            const newTodo = {
                item: action.payload, 
                completed: false, 
                id: Date.now(), 
            }
            return {
                ...state, 
                items: [...state.items, newTodo ]
            }
        case "TOGGLE_COMPLETE":
            const todos = [...state.items];
            let target = todos.find(t => action.payload === t.id)
            if(target) {
                target.completed = !target.completed
            } 
            return {
                ...state, 
                items: [...todos]
            }
        case "CLEAR_COMPLETE":
            return {
                ...state,
                items: [...state.items].filter(task => !task.completed)
            }
        default:
        return state;
    }
};