export const initialState = {
    
 todoList: [{
    
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    
}]

};

export function reducer (state, action) {
switch(action.type) {
    case "ADD_TODO":
        const newTodo = {    
        item: action.payload,
        completed: false,
        id: Date.now()
    };
        return {...state, todoList:[...state.todoList, newTodo ]};
    case "TOGGLE_TODO":
        return {
            ...state, todoList: state.todoList.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed};
                } else { return todo;}
            })
        };
      case "DELETE_COMPLETED":
          console.log(action);
          return { ...state, todoList: state.todoList.filter(todo => !todo.completed)
          };  
    default:
        return state; 
}

}