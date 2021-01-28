
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

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: return [...state, {
            item: action.payload,
            completed: false,
            id: Date.now()}]
        default: return state
   };
};

export default todoReducer;