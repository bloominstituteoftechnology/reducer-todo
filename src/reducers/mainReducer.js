import {todoListReducer} from './todoListReducer'

export const mainReducer = ({todoList, user}, action) => ({
    todoList: todoListReducer(todoList, action),
})