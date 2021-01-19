import { ADD_TODO, TOGGLE_COMPLETED, NEW_TODO } from '../actions/index';


export const initialState ={
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()  
        }
    ],
    newTodo: ''
    
}

const reducer = (state, action) =>{
    switch(action.type){
        case('ADD_TODO'):
            return {...state, todo: [action.payload]};
        case('TOGGLE_COMPLETED'):
            return{...state, todo: [action.payload]};
            case('NEW_TODO'):
            return{...state, newTodo: action.payload }
        default:
            return(state);
    }
};


export default reducer;