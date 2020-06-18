

export const initialState = {
    todos: [
        {
            item: "",
            completed: false,
            id: Date.now()
        }
    ]
};

export const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
    }
}