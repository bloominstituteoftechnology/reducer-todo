

export const initialState = {
    item: "This is the initial State in Reducer",
    completed: false,
    id: 1

}

export const listReducer = (state, action) => {
       switch(action.type) {
         case UPDATE_ITEM:
            return {...state, item: action.payload, editing: false};
         case TOGGLE_COMPLETED:
             return {...state, completed: !state.completed};  
        default:
            //console.log("Hello from the default in indexReducer", state);
            return state;
            
    }
};