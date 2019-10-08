import React, {useReducer} from "react";


export const initialState={ 
todos: [
    {
        item: "clean room",
        completed: false,
        id: Date.now()
    }
]
};

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_CHORE":
            
            const newChore = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };

        return{
            ...state,
            todos: [...state.todos, newChore]
        };


        case "TOGGLE_CHORE":
            
    


    default:
    return state;
    }
    
}