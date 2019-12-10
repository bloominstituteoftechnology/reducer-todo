export const initialState = [{
    task: 'Add Todo',
    completed: false,
    id: Date.now()
}];

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state,
                {task: action.payload, 
                completed: false, 
                id: Date.now()
            }];
        case 'TOGGLE_COMPLETED':
            return state.map((task) => {
                if (task.key === action.payload){
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            });
        case 'CLEAR_COMPLETED':
            return state.filter((task) => {return task.completed === false});
        default: return state;
    }
};