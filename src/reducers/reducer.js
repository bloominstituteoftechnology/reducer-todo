

export const initialState = {
item: 'Learn about reducers',
completed: false,
id: Date.now()
};


export const reducer = (state, action) => {
    console.log(action);
}