import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/index';


export const todo ={
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

const reducer = (state, action) =>{
    switch(action.type){
        case('ADD_TODO'):
            return {...state, item: action.payload};
        case('TOGGLE_COMPLETED'):
            return{...state, completed: action.payload};
        default:
            return(state);
    }
};


export default reducer;