
export const initialState={
    todoArr:[
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
    
};



export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
        const newTodo ={
            item: action.payload,
            completed:false,
            id: Date.now()
        };
        return{
            ...state, todoArr: [...state.todoArr, newTodo]
        };

    case 'TOGGLE_TODO':
        return{
            ...state, todoArr: state.todoArr.map(todo=>{
                if (todo.id===action.payload){
                    return{
                        ...todo, 
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        };
    
    case 'CLEAR_COMPLETED':
        return{
            ...state, 
            todoArr:state.todoArr.filter(todo => !todo.completed)
        }

    
    default:
      return state
  }
};