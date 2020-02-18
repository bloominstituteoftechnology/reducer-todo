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
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todosArray:[...state.todosArray,{
                    
                    item:action.payload,
                    completed:false,
                    id:Date.now(),
                }]
            };
            case 'CLEAR_COMPLETED':
                return{
                    ...state,
                    todosArray:state.todosArray.filter(e=>e.completed === false)
                }
                case 'TOGGLE_COMPLETED':
                    return {
                        ...state,
                        todosArray:state.todosArray.map(e=>e.id === action.payload ? {...e, completed: !e.completed} : e)
                    }

            default:
                return state;
    }
};