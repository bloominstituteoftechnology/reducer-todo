
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
console.log(initialState)
const todoReducer = (state, action) => {
    switch (action.type) {
    default: return state
   };
};

export default todoReducer;