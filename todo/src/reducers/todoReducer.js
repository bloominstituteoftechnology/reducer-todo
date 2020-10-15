export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const ADD_TODO = e => {
    e.preventDefault();
    
}



export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, item: '', id: Date.now(), completed:false,};
            default: return state; 
    }
    
         
    
}