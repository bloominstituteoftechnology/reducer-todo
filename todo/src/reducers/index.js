export const initialState = {
  todos: [{
    title: "todo a",
    id: 0,
    completed: false,
  },{
    title: "todo b",
    id: 1,
    completed: false,
  },{
    title: "todo c",
    id: 2,
    completed: false,
  }]
}

const reducer = (state,action) => {
  switch(action.type){
    case("ADD_TODO"):
    const newTodo = {
      id: Date.now(),
      completed: false,
      title: action.payload
    }
      return({...state, todos:[...state.todos, newTodo]})
    default:
      return state;
  }
}

export default reducer