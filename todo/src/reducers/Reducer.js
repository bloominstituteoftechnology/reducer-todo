/*
* BUILD A SIMPLE REDUCER AND INITIAL STATE
*/

export const initialState = [
    {   item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const reducer = (state, action) => {
    if (action.type === 'WHATEVER')
    {
        return state
    }
}
