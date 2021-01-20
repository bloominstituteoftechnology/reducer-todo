export const initialState = {
    todos: [{
        title: "todo 1",
        id: 0,
        completed: false
      },{
        title: "todo 2",
        id: 0,
        completed: false
      },{
        title: "todo 3",
        id: 0,
        completed: false
      },
    ]
}
 

export const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
        const newTodo = {
            id: state.todos.length,
            complete: false,
            title:action.payload
        }
        return({...state, todos:[...state.todos, newTodo ]})
        case("TOGGLE_COMPLETED"):
        return({...state, todos:state.todos.map(todo => {
          if (todo.id === action.payload) {
            return({...todo, completed: !todo.completed})
          } else{
            return(todo)
          }
        })})
        default :
        return state
    }
  
}