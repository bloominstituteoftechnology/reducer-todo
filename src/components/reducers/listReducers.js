export const initialState = {
    todoData: [
        {
            task: "Organize Garage",
            id: 1528817077286,
            completed: false
        },
        {
            task: "Bake Cookies",
            id: 1528817084358,
            completed: false
        }
    ]
};

export const listReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log(state);
            const newTask = {
                task: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todoData: [...state.todoData, newTask]
            };

        case "TOGGLE_ITEM":
            return {
                ...state,
                todoData: state.todoData.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })
            };
        case "CLEAR_ITEMS":
            return {
                ...state,
                todoData: state.todoData.filter(task => !task.completed)
            };
        default:
            return state;
    }
};
