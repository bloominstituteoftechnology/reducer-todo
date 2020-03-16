 export const initialState = {
    todos:
    [
        {
        item: 'Learn About Reducers',
        completed: false,
        id: 3892987589
        }

    ]

};

 export const reducer = (state, action) => {
    
    switch (action.type) {
        
        case 'ADD_TODO':

            return {
                ...state,
                item: action.payload,
                completed: false,
                id: Date.now()
            }

        case 'TOGGLE_COMPLETED':

            return {
                ...state,
                completed: true
            }

        case 'CLEAR_COMPLETED':

            return {
                ...state.todos.filter(elem => {
                    return elem.completed === false;
                })
            }

        default: 
            return state;
    }
    
   
};
