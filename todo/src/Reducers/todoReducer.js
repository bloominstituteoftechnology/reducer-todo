


export const todoReducer = (state, action) => {
    switch (action.type) {
        //render todo list
        case ('RENDER_TODO'):
            return (initialState);
        //add items to  todo list
        case ('ADD_ITEM'):
            return {...state, item: ' ', completed: false, id: Date.now()}
        //mark items complete on todo list
        case ('MARK_COMPLETED'):
            return {}
        //clear completed items on todd list
        case ('CLEAR_COMPLETED'):
            return {}
        default:
            return state;
    }
}

export const initialState =
{
    item: 'Learn about reducers',
  completed: false,
  id: 3892987589
    }