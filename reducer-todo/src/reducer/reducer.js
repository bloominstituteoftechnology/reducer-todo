
export const initialState = {
    todo:"Feed Dog",
    complete: false,
    id: Date.now()
}


const reducer = (state, action) =>{
         switch(action.type){
            case("ADD_TODO"):
                return ({...state,todo:action.payload});
            case("EDIT_TODO"):
                return({...state, complete:action.payload});
            case("DELETE_TODO"):
                return({...state, id:action.payload});
            default:
                return(state);

         }


}

export default reducer;