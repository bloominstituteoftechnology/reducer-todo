import { v4 as uuid } from 'uuid'; 

export const initialState ={ 
    todos: [
        {
            task: 'wash dishes',
            completed: false,
            id: uuid()
        },
        {
            task: 'fold laundry', 
            completed: false, 
            id: uuid()
        }
    ]
}


export function todoReducer(state, action){
    switch(action.type){
        case 'TOGGLE_COMPLETED': 
        return {
            ...state, 
            todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo) 
        }
        case 'ADD_TODO': 
        return {
            ...state, 
            todos: [...state.todos, action.payload]
        }
        case 'REMOVE_TODO': 
        return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed)
        }
        default: 
        return state; 
    }
}