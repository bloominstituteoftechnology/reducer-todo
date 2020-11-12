export const TOGGLE_EDITING = "TOGGLE_EDITING"
export const ADD_TASK = "ADD_TASK"


export const initialTodoState = {
    task:"",
    editing:false,
}

export const todoReducer = (state,action) =>{
    console.log(`kh: todoReducer.js:state,action`)
    switch(action.type){
        case TOGGLE_EDITING:
            return{
                ...state,
                editing: !state.editing
            }
        case ADD_TASK:
            return{
                ...state,
                task:action.payload,
                editing:false
            }
        default:
            return state;
    }


}