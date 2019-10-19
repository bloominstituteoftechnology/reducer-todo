export const initialState = {
     addTodo: [
         {
             item: 'Learn about reducers',
             completed: false,
             id: 3892987589 
         }
     ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return{
                ...state, addTodo: [ ...state.addTodo,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }]
            }
            
            default:
                return state;
    }
}
