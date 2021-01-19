export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const addTodo = () =>{
    return({type:ADD_TODO, payload:todo})
}
export const EditTodo = (willEdit) => {
    return ({type:EDIT_TODO, payload:willEdit})

}
export const deleteTodo = (willdelete) => {
    return ({type:DELETE_TODO, payload:willdelete})

}