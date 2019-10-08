export const initialState = {
  todo: []
}

export const reducer = (state, action) => {
  console.log(state)
  switch(action.type){
      case "ADD_TODO":
          const newTodo = {
              item: action.payload,
              id: Date.now(),
              completed: false
          }
          return{
              todo: [...state.todo, newTodo]
          };
      default:
          return state;
  }
};