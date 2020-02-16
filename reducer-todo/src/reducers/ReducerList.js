export const initialState = [
    {
        item: 'Sleep',
        completed: false,
        id: Date.now()
      }
]


export const ReducerList = (state, action) => {
    switch (action.type){
        case 'ADD_TODO': {
            console.log("from add case", state);
            return [...state, {item: action.payload, completed: false, id: Date.now()}]
        };
        case 'CHECK_COMPLETED': {
            let current = state.find(todo => todo.id === Number(action.payload));
            let index = state.indexOf(current);
            let newState = [...state];
            newState[index].completed = !newState[index].completed;
            return newState;
        };
        case 'CLEAR_COMPLETED': {
            let newState = [...state];
            let filtered = newState.filter(todo => {
                return todo.completed === false
            })
            return filtered;
        }
        default: {
            return state;
        }
    }
} 