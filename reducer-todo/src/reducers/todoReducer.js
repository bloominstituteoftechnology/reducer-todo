
export default initialState = () =>{

}


export default todoReducer = (state, action) => {

switch(action.type){
    case 'ADD_TODO':
        return{
        ...state,
        todo: action.payload
        }
    case 'TOGGLE_TODO':
        return{
        ...state,
        completed:!state.completed
        }
    default:
        return state
    }

}






















