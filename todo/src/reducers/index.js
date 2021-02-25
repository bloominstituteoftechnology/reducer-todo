import { ADD_TODO, CLEAR_TODO } from '../actions'

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state.push({
                    item: action.payload,
                    completed: false,
                    id: new Date()
                })
            }
        case CLEAR_TODO:
            if (state.completed) {
                return {
                    item: ''
                }
            }
    }
}