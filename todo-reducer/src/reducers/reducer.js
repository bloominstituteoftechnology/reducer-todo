export const initialState = {
    items :[
        {
          item: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          item: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          item: 'Do grocery shopping',
          id: 1528817084348,
          completed: false
        },
        {
          item: 'Wash Car',
          id: 15288170444358,
          completed: false
        }
      ]
}

  export const todoReducer = (state, action) => {
    switch(action.type) {
      case "CREATE_TODO":

      const newToDo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
        return { 
          ...state, 
          items: [...state.items, newToDo]  
      };
      case "TOGGLE_DELETE":
        return {
          ...state, 
          items: state.items.map(item => {
            return item.id === action.payload ? {
              ...item, 
                 completed: !item.completed
            } : item
          })
        };
      case "CLEAR_COMPLETED":
        return {
          ...state, 
          items: state.items.filter(todo => !todo.completed)
        };
    default:
        return state;
    }
}
