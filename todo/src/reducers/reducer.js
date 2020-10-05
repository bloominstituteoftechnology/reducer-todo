export const initialState = {
    item: 'Do Laundry',
    completed: false,
    id: 1
};

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo'
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
  }

export const reducer = (state, action) => {
        switch (action.type) {
          case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
      
          case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
              if (todo.id === action.payload.id) {
                return { ...todo, complete: !todo.complete}
              }  
              return todo   
            })
      
            case ACTIONS.DELETE_TODO:
              return todos.filter(todo => 
                todo.id !== action.payload.id)
      
            default:
              return todos    
        }
      };
    


