
export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589 
}]


export const todoReducer = (state,action) => {
    // console.log(state)
    switch(action.type){
        
        case 'TOGGLE_DONE':
            return state.map((element) => {
                if(element.id === action.payload) {
                    return {
                        ...element,
                        completed: !element.completed                        
                    };
                }
                // console.log(element)
                return element;
            })
            
        
        case 'ADD_TODO':
            const newTask = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state,newTask] 
            
        case "CLEAR":
            const result = state.filter(item => item.completed === false);
              
            return result;

        default:
            return state;
    }
}

// return state.map((element) => {
//     if(element.id === action.payload) {
//         return {
//             ...element,
//             completed: !element.completed
//         };
//     }
//     return element;
// })

// return{  
//     ...state,              
//     completed: !state.completed
// }        