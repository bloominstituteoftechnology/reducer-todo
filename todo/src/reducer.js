export const initialState = {
    item: [],
    completed: false,
    id: 3892987589,
    
  };


  export const formReducer = (state,action) =>{
    switch(action.type){
        case 'CHANGE_ITEM':
        return{
            ...state,
            item: [...state.item,action.payload],
            completed:false
        };
        case 'CHANGE_COMPLETED':
        return {
            ...state,
            completed:true
        };
        default:
            return state;

    }
    
    
   
  }