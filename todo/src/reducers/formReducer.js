export const initialState = [
    {
        item: "Clean room.",
        completed: false,
        id: 1
    },
];

const formReducer = (state, action) => {
    switch(action.type) {
        case('ADD_TODO'):
            return [...state, {item: action.payload, completed: false, id: Date()}];
        case('TOGGLE_TODO'):
            return state.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed};
                };
                return todo;
            });
        case('CLEAR_TODO'):
            return state.filter(todo => !todo.completed)
        default:
          return state;
      }
}

export default formReducer;