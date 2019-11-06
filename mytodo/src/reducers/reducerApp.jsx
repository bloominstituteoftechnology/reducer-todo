

export const initialState = [
    {
    item: 'Learn about Reducers',
    completed: false,
    id: 1,
   
},
{
    item: 'Learn about Redux',
    completed: false,
    id: 2
}
]



 export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return[
                ...state,
                {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
        ]
        case "TOGGLE_EDIT":
            return state.map(todo => {
                console.log(action.payload)
                if(todo.id === action.payload) {
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            });
        case 'DONE_TOGGLE':
            return  state.filter(done => done.id !== action.payload)
        default:
            return state 
 }
}

 