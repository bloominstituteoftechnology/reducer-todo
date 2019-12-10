export const state = [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
},

{
    item: 'Learn about redux',
    completed: false,
    id: Date.now()
}
];
export const reducer = (action, state) => {
    switch(action.type) {
        default: 
            return state;
    }
};