import {ADD_TODO, SET_INPUT, CLEAR_COMPLETED, TOGGLE_COMPLETED} from '../actions/ToDoActions';

export const initialState = 
{
todo: [
    {
        task: 'Reducers',
        id: 1,
        completed: false
    },
    {
        task: 'Redux',
        id: 2,
        completed: false
    }
],
input: ''
}


 const ToDoReducer = (state, action) => {
    switch (action.type) {
        case SET_INPUT:
            return ({...state, input: action.payload})
        case ADD_TODO:
            return ({...state, todo: [...state.todo, {task: action.payload, id: new Date(), completed: false}]})
        case TOGGLE_COMPLETED:
            const newState = state.todo.map(item => {
                if (item.id === action.payload) {
                    return ({
                        ...item,
                        completed: !state.completed
                    })
                } else {
                    return (item)
                }
            })
            return ({...state, todo: [newState]})
        case CLEAR_COMPLETED: 
            const newList = action.payload.filter(item => {
                return(!item.completed)
            })
            return ({...state, todo: [newList]})
        default: 
            return (state)
    }
}      

export default ToDoReducer;