export const initialState = [
    {
        item: 'Elope',
        completed: false,
        id: 3892987589
      }
]


export const TodoReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO': {
            console.log("from add case", state);
            return [...state, {item: action.payload, completed: false, id: Date.now()}]
        };
        case 'CHECK_COMPLETED': {
                return state.map((item) => {
                return item.id === action.payload ?
                {...item, completed: !item.completed} :
                item
            })
        };
        case 'CLEAR_COMPLETED': {
            return state.filter((item) => !item.completed)
        }
        default: {
            return state;
        }
    }
}