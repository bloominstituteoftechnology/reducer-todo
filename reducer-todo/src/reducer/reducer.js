import {ADD_TODO,TOGGLE_TODO_COMPLETE,DELETE_TODO } from "../components/actions/action"

export const initialState = {
    
    [
       {
         todo: 'Walk the Dog',
         id: 1,
         completed: false
       },
       {
         todo: 'Feed the Dog',
         id: 2,
         completed: false
       },
       {
         todo: 'WorkOut',
         id: 3,
         completed: false
       },
       {
         todo: 'Get Groceries',
         id: 4,
         completed: false
       },
       {
         todo: 'Get Gas',
         id: 5,
         completed: false
       },
       {
         todo: 'Learn React',
         id: 6,
         completed: false
       },
     ];
   
}


const reducer = (state, action) =>{
         switch(action.type){
            case(ADD_TODO):
                return ({...state,todo:action.payload});
            case(TOGGLE_TODO_COMPLETE):
                return({...state, completed:action.payload});
            case(DELETE_TODO):
                return({...state, id:action.payload});
         
            default:
                return(state);

         }


}

export default reducer;