

export const initialState = [{
    action: 'Learn about reducers',
    completed: false,
    // id: 3892987589
}]

export const ADD_TODO = 'ADD_TODO';

export function reducer(state, action){
    switch(action.type){
        case ADD_TODO:
      return [...state, action.payload]
        default:
            return state;
    }
}