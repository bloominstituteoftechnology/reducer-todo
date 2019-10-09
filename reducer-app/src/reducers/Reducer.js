
export const initialState = { 
todos: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
    ]   
}

export const Reducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const newItem={
                item: action.payload,
                id: Date.now(),
                completed: false
            }
            return{
                todo:[state, newItem]
            }

        
    
        default: 
            return state;
    }
}

