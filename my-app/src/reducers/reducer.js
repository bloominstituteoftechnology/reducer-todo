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

        return{
            ...state,
            todos: 
            state.todos.map(todo =>{
                console.log("todo",todo)
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }else{
                    return todo;
                };
            })
        };


        case "CLEAR_CHORE":
            return{
                ...state,
                todos: state.todos.filter(item=>!item.completed)
            };
            

    


    default:
    return state;
    }
    
}