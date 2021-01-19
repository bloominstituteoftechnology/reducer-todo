export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO_COMPLETEd = "TOGGLE_TODO_COMPLETED

const addTodo = (todo) =>{
    return({type:ADD_TODO, payload:todo})
}



const deleteTodo = (willDelete) => {
    return ({type:DELETE_TODO, payload:willDelete})

}
const toggleTodo = (toggle) =>{
    return ({type:TOGGLE_TODO_COMPLETE,  payload:toggle})
}
export default{
addTodo:addTodo,
deleteTodo:deleteTodo,
toggleTodo:toggleTodo

}