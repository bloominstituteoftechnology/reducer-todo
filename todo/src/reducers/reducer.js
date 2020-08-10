import { v4 as uuid } from 'uuid'; 

export const initialState ={ 
    todos: [
        {
            task: 'wash dishes',
            completed: false,
            id: uuid()
        },
        {
            task: 'fold laundry', 
            completed: false, 
            id: uuid()
        }
    ]
}


export function todoReducer(state, action){
    switch(action.type){
        case '': 
        return 
        default: 
        return state; 
    }
}