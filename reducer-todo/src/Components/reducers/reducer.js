
export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589 
}]



export const todoReducer = (state,action) => {
    
    switch(action.type){
        
        // case 'TYPE_TODO':
        //     return{
        //         ...state,
        //         item: action.payload
        //     };
        
        case 'TOGGLE_DONE':
            return{
                ...state,
                completed: !state.completed
            }

        case 'ADD_TODO':
            const newTask = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            console.log(state)
            console.log(newTask)
            return [...state,newTask]                         
            
            

        default:
            return state;
    }
}