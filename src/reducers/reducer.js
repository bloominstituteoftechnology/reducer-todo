

export const initialState = [{
item: 'Learn about reducers',
completed: false,
id: Date.now()
}];


export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODOITEM': {
            return [{item:action.payload, completed: false, id: Date.now()}, ...state]
        };
        case 'TOGGLE_DONE': {
            return state.map(item => item.id ===Number(action.payload) ? {...item, completed: !item.completed}: item);
        };
        case 'CLEAR_DONE': {
            return state.filter(item => !item.completed);
        };
        default: {
            return state;
       }
     }
    }