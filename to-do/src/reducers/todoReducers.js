export const initialState = [{
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
export const reducer = (action, payload) => {
    switch(action.type) {
        default: 
            return initialState;
    }
};