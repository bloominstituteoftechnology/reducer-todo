import * as moment from "moment";
// 'npm moment' is a timestamp that gets inputed into the object
import shortid from "shortid";
// 'npm install shortid' for a short unique user id placed within the object

export const initialState = {
  todoArray: [
    {
      item: "",
      completed: "",
      id: "",
      time: "",
    },
  ],
};

export const reducer = (state, action) => {
  //writing a case that add's another Todo

  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: shortid.generate(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      return {
        ...state,
        todoArray: [...state.todoArray, newTodo],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todoArray: state.todoArray.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
              time: !todo.time,
            };
          } else {
            return todo;
          }
        }),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todoArray: state.todoArray.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
