export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const CLEAR_COMPLETE = "CLEAR_COMPLETE";

export const addTodo = (todo) => {
    return({type: ADD_TODO, payload:todo})
}

export const toggleCompleted = (id) => {
    return({
        type: TOGGLE_COMPLETE, payload:id
    });
}