//pure function:
//  *will always return the same output for the same input
//  *have no side efects

//action object
//  *object that was
//  *required type key
//  *optional payload key

//

//reducer:
//  *pure function
//  *take in 2 parameter sna return one
//      *first parameter is a state object
//      *second parameter is an action object
//  *returns the state

export const initialTodoState = {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589

};

export const todoReducer = (state, action) => {
    if(action.type === "TOGGLE"){
        return {
            ...state,
            completed:false
        }
    }
    else if (action.type === "SET_ITEM") {
        return{
            ...state, 
            item: action.payload
        }
    }

    return state;
};