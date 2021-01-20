import { ACTIONS} from "../action"





export const todos ={
    todo: "learn about reducers",
    complete:false,
    id: 1
}
export const reducer = (todos, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, action.payload.name];
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id){
            return { ...todo, complete: !todo.complete };
          
        } return todo
      })
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
  
      default:
        return todos;
    }
  };