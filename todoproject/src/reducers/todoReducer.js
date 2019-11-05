export const state = {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
}

export const reducer = (action, payload) => {
    switch(action.type) {
        default: 
            return state;
    }
}