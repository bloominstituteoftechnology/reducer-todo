import {ADD_TODO, COMPLETED_TODO, CLEAR_TODO} from '../actions/actions'




export const initialState = {
    todos: [],
}

const todoReducer = (state,action) => {
switch (action.type){
    case(ADD_TODO):
        return({...state, 
            todos:[...state.todos, action.payload]
});

    case(COMPLETED_TODO):
    return({...state, 
        todos:[...state.todos.map(item => {
        if(item.id === action.payload) {
            return {...item, completed: !item.completed}
        }
        return(item)
    })]
})

case (CLEAR_TODO) : 
    return({ ...state,
            todos: [...state.todos.filter((item => {
                return (!item.completed)
            }
                ))]
        })
    
    default: 
    return(state);

    }
}
    

export default todoReducer;