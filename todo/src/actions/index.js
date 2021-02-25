export const ADD_TODO = 'ADD_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'

export default {
    addTodo: (todo) => {
        return { type: ADD_TODO, payload: todo }
    },

    clearTodo: () => {
        return { type: CLEAR_TODO }
    }
}