export const initialState = [{ item: "Learn about reducers", completed: false, id: Date.now() }]; // initial state

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return [...state, newTodo];
            default: return state;
    }
};

