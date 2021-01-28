
export const initialState = 
[
    {
        item: 'Attend intitute',
        completed: false,
        id: 579112
    },
    {
        item: 'Pick up suit',
        completed: false,
        id: 579113
    },
    {
        item: 'Go to the Temple',
        completed: false,
        id: 579114
    }
];
    export const ADD_TODO='ADD_TODO'
    export const TOGGLE_COMPLETED='TOGGLE_COMPLETED'

const todoReducer = (state, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADD_TODO: return [...state, {
            item: action.payload,
            completed: false,
            id: Date.now()}]
        case TOGGLE_COMPLETED: return state.map((todo) => {
            if (todo.id === action.payload) {
                return {...todo,
            completed: !todo.completed}
            }
            return todo
        })
            
        
        default: return state
   };
};

export default todoReducer;