export const initialState = [ {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
  item: 'reach mvp',
  completed: false,
  id: 3892987590
}
]


export const reducer = (state, action) => {
   
    switch(action.type){
        case 'ADD_TODO':
            return[...state, {item: action.payload, completed: false, id: new Date()}] 

        case 'TOGGLE_TODO':
            return([
                ...state.map(todo => {
                    if(todo.id === action.payload){
                        return{
                          ...todo,
                          completed: !todo.completed  
                        }
                    } else{
                        return todo;
                    }
                })
            ]               
            )

            case 'COMPLETED':
            return([
                ...state.filter(todo => {
                    return !todo.completed
                  
                })
            ]               
            )
                
            
                
                
             

        default:
            return state;
    }
}

