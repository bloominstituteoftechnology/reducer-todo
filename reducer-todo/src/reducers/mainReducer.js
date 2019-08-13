import {todoListReducer} from './todoListReducer'

 export const mainReducer = ({todoList}, action) => ({
    todoList: todoListReducer(todoList, action)
 })