export const initialState = [{ item: "Learn about reducers", completed: false, id: Date.now() }]; // initial state

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTodo = {
                task: action.payload,
                id: Date.now(),
                completed: false
            };
            return [...state, newTodo];
            default: return state;
    }
};

