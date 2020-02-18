export const initialState = {
    todosArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
    ]
}

export const todoReducer = (state, action) => {
    const newState = {...state};
    return newState;
};