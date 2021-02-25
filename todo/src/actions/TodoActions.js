export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const RESET_INPUT = "RESET_INPUT";

export const addTodo = {
    addTodo: (todo) => {
        return { type: ADD_TODO, payload: todo }
    },
    toggleCompleted: (id) => { 
        return { type: TOGGLE_COMPLETED, payload: id }
    },
    clearCompleted: () => { 
        return { type: CLEAR_COMPLETED }
    },
    resetInput: () => {
        return { type: RESET_INPUT }
    }
}

export default addTodo;