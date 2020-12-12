import {SET_ADD_TASK, SET_TOGGLE_TASK, SET_CLEAR_TASK} from '../actions/action';

export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
]


const reducer = (state, action) => {
    switch(action.type) {

        case(SET_ADD_TASK):
        return  [...state, action.payload]

        case(SET_TOGGLE_TASK): 
        return state.map((todo) => (
            todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
        ))

        case(SET_CLEAR_TASK):
        const clearItems = state.filter((item) => !item.completed)
        return clearItems

        default:
            return(state);
    }
}

//test

export default reducer;