

export const initialState = {
    todo: "Get grocery",
    completed: false,
    id:1

}


export const todoReducer = (state, action) => {

switch(action.type){
    case 'ADD_TODO':
        return{
        ...state,
        todo: action.payload,
        id: new Date()
        }
    case 'TOGGLE_TODO':
        return{
        ...state,
        completed:!state.completed
        }
    case 'CLEAR_COMPLETED':
        return{
        ...state,
        completed:""
        }
    default:
        return state
    }

}
























